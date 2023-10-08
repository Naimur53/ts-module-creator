import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CreationService } from './creation.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { ICreation } from './creation.interface';
import { creationSearchableFields } from './creation.constant';

const addCreation: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const CreationData = req.body;

    const result = await CreationService.addCreation(CreationData);
    sendResponse<ICreation>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Creation Created successfully!',
      data: result,
    });
  }
);

const getAllCreation = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', ...creationSearchableFields]);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CreationService.getAllCreation(
    filters,
    paginationOptions
  );

  sendResponse<ICreation[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Creation retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const updateCreation: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateAbleData = req.body;

    const result = await CreationService.updateCreation(id, updateAbleData);

    sendResponse<ICreation>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Creation Updated successfully!',
      data: result,
    });
  }
);
const getSingleCreation: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await CreationService.getSingleCreation(id);

    sendResponse<ICreation>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Creation retrieved  successfully!',
      data: result,
    });
  }
);
const deleteCreation: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await CreationService.deleteCreation(id);

    sendResponse<ICreation>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Creation deleted successfully!',
      data: result,
    });
  }
);

export const CreationController = {
  getAllCreation,
  addCreation,
  updateCreation,
  getSingleCreation,
  deleteCreation,
};
