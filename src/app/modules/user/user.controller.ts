
        import { Request, Response } from 'express';
        import { RequestHandler } from 'express-serve-static-core';
        import httpStatus from 'http-status';
        import catchAsync from '../../../shared/catchAsync';
        import sendResponse from '../../../shared/sendResponse';
        import { UserService } from './user.service';
        import pick from '../../../shared/pick';
        import { paginationFields } from '../../../constants/pagination';
        import { IUser } from './user.interface';
        import { userSearchableFields } from './user.constant';
        
        const createUser: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const UserData = req.body;
        
            const result = await UserService.createUser(UserData);
            sendResponse<IUser>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'User Created successfully!',
              data: result,
            });
          }
        );
        
        const getAllUser = catchAsync(async (req: Request, res: Response) => {
          const filters = pick(req.query, [...userSearchableFields]);
          const paginationOptions = pick(req.query, paginationFields);
        
          const result = await UserService.getAllUser(filters, paginationOptions);
        
          sendResponse<IUser[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User retrieved successfully !',
            meta: result.meta,
            data: result.data,
          });
        });
        
        const updateUser: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
            const updateAbleData = req.body;
        
            const result = await UserService.updateUser(id, updateAbleData);
        
            sendResponse<IUser>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'User Updated successfully!',
              data: result,
            });
          }
        );
        const getSingleUser: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await UserService.getSingleUser(id);
        
            sendResponse<IUser>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'User retrieved  successfully!',
              data: result,
            });
          }
        );
        const deleteUser: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await UserService.deleteUser(id);
        
            sendResponse<IUser>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'User deleted successfully!',
              data: result,
            });
          }
        );
        
        export const UserController = {
          getAllUser,
          createUser,
          updateUser,
          getSingleUser,
          deleteUser,
        }; 
          