import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { SortOrder } from 'mongoose';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { ICreation, ICreationFilters } from './creation.interface';
import { Creation } from './creation.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { creationSearchableFields } from './creation.constant';

const getAllCreation = async (
  filters: ICreationFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICreation[]>> => {
  // all Creation
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  //   search text
  if (searchTerm) {
    andConditions.push({
      $or: creationSearchableFields.map(field => ({
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whereConditions: any =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Creation.find(whereConditions)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit)
    .populate('user');

  const total = await Creation.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const addCreation = async (payload: ICreation): Promise<ICreation | null> => {
  const newCreation = await Creation.create(payload);
  return newCreation;
};

const updateCreation = async (
  id: string,
  payload: Partial<ICreation>
): Promise<ICreation | null> => {
  const result = await Creation.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const getSingleCreation = async (id: string): Promise<ICreation | null> => {
  const result = await Creation.findById(id).populate('creator');
  return result;
};

const deleteCreation = async (id: string): Promise<ICreation | null> => {
  const result = await Creation.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Creation not found!');
  }
  return result;
};

export const CreationService = {
  getAllCreation,
  addCreation,
  updateCreation,
  getSingleCreation,
  deleteCreation,
};
