"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileName_1 = __importDefault(require("./fileName"));
const createControllerFile = (path, name) => {
    const { upperCaseName, lowerCaseName } = (0, fileName_1.default)(name);
    fs_1.default.writeFileSync(path, `
import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ${upperCaseName}Service } from './${lowerCaseName}.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { I${upperCaseName} } from './${lowerCaseName}.interface';
import { ${lowerCaseName}SearchableFields } from './${lowerCaseName}.constant';

const create${upperCaseName}: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ${upperCaseName}Data = req.body;

    const result = await ${upperCaseName}Service.create${upperCaseName}(${upperCaseName}Data);
    sendResponse<I${upperCaseName}>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '${upperCaseName} Created successfully!',
      data: result,
    });
  }
);

const getAll${upperCaseName} = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [...${lowerCaseName}SearchableFields]);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ${upperCaseName}Service.getAll${upperCaseName}(filters, paginationOptions);

  sendResponse<I${upperCaseName}[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '${upperCaseName} retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const update${upperCaseName}: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateAbleData = req.body;

    const result = await ${upperCaseName}Service.update${upperCaseName}(id, updateAbleData);

    sendResponse<I${upperCaseName}>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '${upperCaseName} Updated successfully!',
      data: result,
    });
  }
);
const getSingle${upperCaseName}: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ${upperCaseName}Service.getSingle${upperCaseName}(id);

    sendResponse<I${upperCaseName}>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '${upperCaseName} retrieved  successfully!',
      data: result,
    });
  }
);
const delete${upperCaseName}: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ${upperCaseName}Service.delete${upperCaseName}(id);

    sendResponse<I${upperCaseName}>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '${upperCaseName} deleted successfully!',
      data: result,
    });
  }
);

export const ${upperCaseName}Controller = {
  getAll${upperCaseName},
  create${upperCaseName},
  update${upperCaseName},
  getSingle${upperCaseName},
  delete${upperCaseName},
}; 
  `);
};
exports.default = createControllerFile;
