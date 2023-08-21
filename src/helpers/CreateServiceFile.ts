import fs from 'fs';
import fileName from './fileName';
const createServiceFile = async (path: string, name: string) => {
  const { upperCaseName, lowerCaseName } = fileName(name);

  fs.writeFileSync(
    path,
    `
    import { SortOrder } from 'mongoose';
    import { paginationHelpers } from '../../../helpers/paginationHelper';
    import { IGenericResponse } from '../../../interfaces/common';
    import { IPaginationOptions } from '../../../interfaces/pagination';
    import { I${upperCaseName}, I${upperCaseName}Filters } from './${lowerCaseName}.interface';
    import { ${upperCaseName} } from './${lowerCaseName}.model';
    import ApiError from '../../../errors/ApiError';
    import httpStatus from 'http-status';
    import { ${lowerCaseName}SearchableFields } from './${lowerCaseName}.constant'; 
    
    const getAll${upperCaseName} = async (
      filters: I${upperCaseName}Filters,
      paginationOptions: IPaginationOptions
    ): Promise<IGenericResponse<I${upperCaseName}[]>> => {
      // all ${upperCaseName}
      const { searchTerm, publishedYear, ...filtersData } = filters;
      const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptions);
    
      const andConditions = [];
    
      //   search text
      if (searchTerm) {
        const wihtoutPublished = ${lowerCaseName}SearchableFields.slice(
          0,
          ${lowerCaseName}SearchableFields.length - 1
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
    
      
    
      const result = await ${upperCaseName}.find(whereConditions)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .populate('creator');
    
      const total = await ${upperCaseName}.countDocuments();
    
      return {
        meta: {
          page,
          limit,
          total,
        },
        data: result,
      };
    };
    
    const create${upperCaseName} = async (payload: I${upperCaseName}): Promise<I${upperCaseName} | null> => {
      const new${upperCaseName} = await ${upperCaseName}.create(payload);
      return new${upperCaseName};
    };
    
    const update${upperCaseName} = async (
      id: string,
      payload: Partial<I${upperCaseName}>
    ): Promise<I${upperCaseName} | null> => {
      
      const result = await ${upperCaseName}.findOneAndUpdate({ _id: id }, payload, {
        new: true,
      });
      return result;
    };
    const getSingle${upperCaseName} = async (id: string): Promise<I${upperCaseName} | null> => {
      const result = await ${upperCaseName}.findById(id).populate('creator');
      return result;
    };
    
    const delete${upperCaseName} = async (id: string): Promise<I${upperCaseName} | null> => {
      const result = await ${upperCaseName}.findByIdAndDelete(id);
      if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, '${upperCaseName} not found!');
      }
      return result;
    };
    
    export const ${upperCaseName}Service = {
      getAll${upperCaseName},
      create${upperCaseName},
      update${upperCaseName},
      getSingle${upperCaseName},
      delete${upperCaseName},
    };
  `
  );
};
export default createServiceFile;
