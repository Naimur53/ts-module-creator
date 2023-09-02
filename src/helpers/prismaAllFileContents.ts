import { IContent } from '../interfaces/common';

const prismaAllFileContents: IContent[] = [
  {
    fileName: 'constant',
    content: `
        export const demoSearchableFields = ['your key'];
        export const demoFilterAbleFields = [
            'code',
            'startMonth',
            'endMonth',
          ];
          
        `,
  },
  {
    fileName: 'interface',
    content: `
        export type IDemoFilters = {
            searchTerm?: string;
          }; 
        `,
  },
  {
    fileName: 'controller',
    content: `import { Demo } from '@prisma/client';
        import { Request, Response } from 'express';
        import { RequestHandler } from 'express-serve-static-core';
        import httpStatus from 'http-status';
        import { paginationFields } from '../../../constants/pagination';
        import catchAsync from '../../../shared/catchAsync';
        import pick from '../../../shared/pick';
        import sendResponse from '../../../shared/sendResponse';
        import { DemoService } from './demo.service';
        import { demoFilterAbleFields } from './academicSemester.constant';
        const createDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const DemoData = req.body;
        
            const result = await DemoService.createDemo(
              DemoData
            );
            sendResponse<Demo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo Created successfully!',
              data: result,
            });
          }
        );
        
        const getAllDemo = catchAsync(
          async (req: Request, res: Response) => {
            const filters = pick(req.query, [
              'searchTerm',
              ...demoFilterAbleFields,
            ]);
            const paginationOptions = pick(req.query, paginationFields);
        
            const result = await DemoService.getAllDemo(
              filters,
              paginationOptions
            );
        
            sendResponse<Demo[]>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo retrieved successfully !',
              meta: result.meta,
              data: result.data,
            });
          }
        );
        
        const getSingleDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await DemoService.getSingleDemo(id);
        
            sendResponse<Demo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo retrieved  successfully!',
              data: result,
            });
          }
        );
        
        const updateDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
            const updateAbleData = req.body;
        
            const result = await DemoService.updateDemo(
              id,
              updateAbleData
            );
        
            sendResponse<Demo>(res, {
              statusCode: httpStatus.OK,
              success: true,
              message: 'Demo Updated successfully!',
              data: result,
            });
          }
        );
        const deleteDemo: RequestHandler = catchAsync(
          async (req: Request, res: Response) => {
            const id = req.params.id;
        
            const result = await DemoService.deleteDemo(id);
        
            sendResponse<Demo>(res, {
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
        };`,
  },
  {
    fileName: 'router',
    content: `import express from 'express';
        import validateRequest from '../../middlewares/validateRequest';
        import { DemoController } from './demo.controller';
        import { DemoValidation } from './demo.validation';
        const router = express.Router();
        
        router.get('/', DemoController.getAllDemo);
        router.get('/:id', DemoController.getSingleDemo);
        
        router.post(
          '/',
          validateRequest(DemoValidation.createValidation),
          DemoController.createDemo
        );
        
        router.patch(
          '/:id',
          validateRequest(DemoValidation.updateValidation),
          DemoController.updateDemo
        );
        router.delete('/:id', DemoController.deleteDemo);
        
        export const DemoRoutes = router;`,
  },
  {
    fileName: 'service',
    content: `import { Demo, Prisma } from '@prisma/client';
        import httpStatus from 'http-status';
        import ApiError from '../../../errors/ApiError';
        import { paginationHelpers } from '../../../helpers/paginationHelper';
        import { IGenericResponse } from '../../../interfaces/common';
        import { IPaginationOptions } from '../../../interfaces/pagination';
        import prisma from '../../../shared/prisma';
        import { demoSearchableFields } from './demo.constant';
        import { IDemoFilters } from './demo.interface';
        
        const getAllDemo = async (
          filters: IDemoFilters,
          paginationOptions: IPaginationOptions
        ): Promise<IGenericResponse<Demo[]>> => {
          const { page, limit, skip } =
            paginationHelpers.calculatePagination(paginationOptions);
        
          const { searchTerm, ...filterData } = filters;
        
          const andCondition = [];
        
          if (searchTerm) {
            const searchAbleFields = demoSearchableFields.map(single => {
              const query = {
                [single]: {
                  contains: searchTerm,
                  mode: 'insensitive',
                },
              };
              return query;
            });
            andCondition.push({
              OR: searchAbleFields,
            });
          }
          if (Object.keys(filters).length) {
            andCondition.push({
              AND: Object.keys(filterData).map(key => ({
                [key]: {
                  equals: (filterData as any)[key],
                },
              })),
            });
          }
        
          const whereConditions: Prisma.DemoWhereInput =
            andCondition.length > 0 ? { AND: andCondition } : {};
        
          const result = await prisma.demo.findMany({
            where: whereConditions,
            skip,
            take: limit,
            orderBy:
              paginationOptions.sortBy && paginationOptions.sortOrder
                ? {
                    [paginationOptions.sortBy]: paginationOptions.sortOrder,
                  }
                : {
                    createdAt: 'desc',
                  },
          });
          const total = await prisma.demo.count();
          const output = {
            data: result,
            meta: { page, limit, total },
          };
          return output;
        };
        
        const createDemo = async (
          payload: Demo
        ): Promise<Demo | null> => {
          const newDemo = await prisma.demo.create({
            data: payload,
          });
          return newDemo;
        };
        
        const getSingleDemo = async (
          id: string
        ): Promise<Demo | null> => {
          const result = await prisma.demo.findUnique({
            where: {
              id,
            },
          });
          return result;
        };
        
        const updateDemo = async (
          id: string,
          payload: Partial<Demo>
        ): Promise<Demo | null> => {
          const result = await prisma.demo.update({
            where: {
              id,
            },
            data: payload,
          });
          return result;
        };
        
        const deleteDemo = async (
          id: string
        ): Promise<Demo | null> => {
          const result = await prisma.demo.delete({
            where: { id },
          });
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
        };`,
  },
  {
    fileName: 'validation',
    content: `import { z } from 'zod';

        const createValidation = z.object({
          body: z.object({
           
          }),
        });
        const updateValidation = z.object({
          body: z.object({ 
          }),
        });
        export const DemoValidation = {
          createValidation,
          updateValidation,
        };
        `,
  },
];

export default prismaAllFileContents;
