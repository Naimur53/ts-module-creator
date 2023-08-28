
    import { SortOrder } from 'mongoose';
    import { paginationHelpers } from '../../../helpers/paginationHelper';
    import { IGenericResponse } from '../../../interfaces/common';
    import { IPaginationOptions } from '../../../interfaces/pagination';
    import { IRoutine, IRoutineFilters } from './routine.interface';
    import { Routine } from './routine.model';
    import ApiError from '../../../errors/ApiError';
    import httpStatus from 'http-status';
    import { routineSearchableFields } from './routine.constant'; 
    
    const getAllRoutine = async (
      filters: IRoutineFilters,
      paginationOptions: IPaginationOptions
    ): Promise<IGenericResponse<IRoutine[]>> => {
      // all Routine
      const { searchTerm, publishedYear, ...filtersData } = filters;
      const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptions);
    
      const andConditions = [];
    
      //   search text
      if (searchTerm) {
        const wihtoutPublished = routineSearchableFields.slice(
          0,
          routineSearchableFields.length - 1
        );
    
        andConditions.push({
          $or: wihtoutPublished.map(field => ({
            [field]: {
              $regex: searchTerm,
              $options: 'i',
            },
          })),
        });
      }
      // make and query
      if (Object.keys(filtersData).length) {
        andConditions.push({
          $and: Object.entries(filtersData).map(([field, value]) => ({
            [field]: value,
          })),
        });
      }
      const sortConditions: { [key: string]: SortOrder } = {};
    
      if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
      }
      const whereConditions: any =
        andConditions.length > 0 ? { $and: andConditions } : {};
    
      
    
      const result = await Routine.find(whereConditions)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .populate('creator');
    
      const total = await Routine.countDocuments();
    
      return {
        meta: {
          page,
          limit,
          total,
        },
        data: result,
      };
    };
    
    const createRoutine = async (payload: IRoutine): Promise<IRoutine | null> => {
      const newRoutine = await Routine.create(payload);
      return newRoutine;
    };
    
    const updateRoutine = async (
      id: string,
      payload: Partial<IRoutine>
    ): Promise<IRoutine | null> => {
      
      const result = await Routine.findOneAndUpdate({ _id: id }, payload, {
        new: true,
      });
      return result;
    };
    const getSingleRoutine = async (id: string): Promise<IRoutine | null> => {
      const result = await Routine.findById(id).populate('creator');
      return result;
    };
    
    const deleteRoutine = async (id: string): Promise<IRoutine | null> => {
      const result = await Routine.findByIdAndDelete(id);
      if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Routine not found!');
      }
      return result;
    };
    
    export const RoutineService = {
      getAllRoutine,
      createRoutine,
      updateRoutine,
      getSingleRoutine,
      deleteRoutine,
    };
  