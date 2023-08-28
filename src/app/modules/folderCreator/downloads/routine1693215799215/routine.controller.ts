
import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RoutineService } from './routine.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IRoutine } from './routine.interface';
import { routineSearchableFields } from './routine.constant';

const createRoutine: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const RoutineData = req.body;

    const result = await RoutineService.createRoutine(RoutineData);
    sendResponse<IRoutine>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Routine Created successfully!',
      data: result,
    });
  }
);

const getAllRoutine = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [...routineSearchableFields]);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await RoutineService.getAllRoutine(filters, paginationOptions);

  sendResponse<IRoutine[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Routine retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const updateRoutine: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateAbleData = req.body;

    const result = await RoutineService.updateRoutine(id, updateAbleData);

    sendResponse<IRoutine>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Routine Updated successfully!',
      data: result,
    });
  }
);
const getSingleRoutine: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await RoutineService.getSingleRoutine(id);

    sendResponse<IRoutine>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Routine retrieved  successfully!',
      data: result,
    });
  }
);
const deleteRoutine: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await RoutineService.deleteRoutine(id);

    sendResponse<IRoutine>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Routine deleted successfully!',
      data: result,
    });
  }
);

export const RoutineController = {
  getAllRoutine,
  createRoutine,
  updateRoutine,
  getSingleRoutine,
  deleteRoutine,
}; 
  