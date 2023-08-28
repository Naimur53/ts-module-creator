import { IContent } from '../interfaces/common';

const mongooseAllFileContents: IContent[] = [
  {
    fileName: 'controller',
    content: `
        import { Request, Response } from 'express';
        import { RequestHandler } from 'express-serve-static-core';
        import httpStatus from 'http-status';
        import catchAsync from '../../../shared/catchAsync';
        import sendResponse from '../../../shared/sendResponse';
        import { DemoService } from './demo.service';
        import pick from '../../../shared/pick';
        import { paginationFields } from '../../../constants/pagination';
        import { IDemo } from './demo.interface';
        import { demoSearchableFields } from './demo.constant';
        
        const createDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const DemoData = req.body;
        
            const result = await DemoService.createDemo(DemoData);
            sendResponse<IDemo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo Created successfully!',
              data: result,
            });
          }
        );
        
        const getAllDemo = catchAsync(async (req: Request, res: Response) => {
          const filters = pick(req.query, [...demoSearchableFields]);
          const paginationOptions = pick(req.query, paginationFields);
        
          const result = await DemoService.getAllDemo(filters, paginationOptions);
        
          sendResponse<IDemo[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Demo retrieved successfully !',
            meta: result.meta,
            data: result.data,
          });
        });
        
        const updateDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
            const updateAbleData = req.body;
        
            const result = await DemoService.updateDemo(id, updateAbleData);
        
            sendResponse<IDemo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo Updated successfully!',
              data: result,
            });
          }
        );
        const getSingleDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await DemoService.getSingleDemo(id);
        
            sendResponse<IDemo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo retrieved  successfully!',
              data: result,
            });
          }
        );
        const deleteDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await DemoService.deleteDemo(id);
        
            sendResponse<IDemo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo deleted successfully!',
              data: result,
            });
          }
        );
        
        export const DemoController = {
          getAllDemo,
          createDemo,
          updateDemo,
          getSingleDemo,
          deleteDemo,
        }; 
          `,
  },
  {
    fileName: 'service',
    content: `import { paginationHelpers } from '../../../helpers/paginationHelper';
        import { IGenericResponse } from '../../../interfaces/common';
        import { IPaginationOptions } from '../../../interfaces/pagination';
        import { IDemo, IDemoFilters } from './demo.interface';
        import { Demo } from './demo.model';
        import ApiError from '../../../errors/ApiError';
        import httpStatus from 'http-status';
        import { demoSearchableFields } from './demo.constant'; 
        
        const getAllDemo = async (
          filters: IDemoFilters,
          paginationOptions: IPaginationOptions
        ): Promise<IGenericResponse<IDemo[]>> => {
          // all Demo
          const { searchTerm, publishedYear, ...filtersData } = filters;
          const { page, limit, skip, sortBy, sortOrder } =
            paginationHelpers.calculatePagination(paginationOptions);
        
          const andConditions = [];
        
          //   search text
          if (searchTerm) {
            const wihtoutPublished = demoSearchableFields.slice(
              0,
              demoSearchableFields.length - 1
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
        
          
        
          const result = await Demo.find(whereConditions)
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate('creator');
        
          const total = await Demo.countDocuments();
        
          return {
            meta: {
              page,
              limit,
              total,
            },
            data: result,
          };
        };
        
        const createDemo = async (payload: IDemo): Promise<IDemo | null> => {
          const newDemo = await Demo.create(payload);
          return newDemo;
        };
        
        const updateDemo = async (
          id: string,
          payload: Partial<IDemo>
        ): Promise<IDemo | null> => {
          
          const result = await Demo.findOneAndUpdate({ _id: id }, payload, {
            new: true,
          });
          return result;
        };
        const getSingleDemo = async (id: string): Promise<IDemo | null> => {
          const result = await Demo.findById(id).populate('creator');
          return result;
        };
        
        const deleteDemo = async (id: string): Promise<IDemo | null> => {
          const result = await Demo.findByIdAndDelete(id);
          if (!result) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Demo not found!');
          }
          return result;
        };
        
        export const DemoService = {
          getAllDemo,
          createDemo,
          updateDemo,
          getSingleDemo,
          deleteDemo,
        };
      `,
  },
  {
    fileName: 'router',
    content: ` import express from 'express'; 
        import { DemoController } from './demo.controller';
        const router = express.Router();
        
        router.get('/', DemoController.getAllDemo);
        router.get('/:id', DemoController.getSingleDemo);
        
        router.post(
          '/', 
          DemoController.createDemo
        );
        
        router.patch(
          '/:id', 
          DemoController.updateDemo
        );
        router.delete('/:id', DemoController.deleteDemo);
        
        export const DemoRoutes = router; 
        `,
  },
  {
    fileName: 'model',
    content: `
        import { Schema, model } from 'mongoose';
        import { DemoModel, IDemo } from './demo.interface'; 
        const demoSchema = new Schema<IDemo>({
        //  enter your schema
        });
        
        export const Demo = model<IDemo, DemoModel>('Demo', demoSchema);`,
  },
  {
    fileName: 'interface',
    content: ` 
        import { Model } from 'mongoose';  
        
        export type IDemo = {
        //   your type
        };
        export type DemoModel = Model<IDemo, Record<string, unknown>>;
        export type IDemoFilters = {
          searchTerm?: string; 
        };
         `,
  },
  {
    fileName: 'constant',
    content: ` export const demoSearchableFields = [
            'searchTerm', 
          ];`,
  },
];
export default mongooseAllFileContents;
