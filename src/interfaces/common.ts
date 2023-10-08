import { ENUM_USER_ROLE } from '../enums/users';
import { IGenericErrorMessage } from './error';

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type IVerifiedUser = {
  role: ENUM_USER_ROLE.ADMIN | ENUM_USER_ROLE.SELLER | ENUM_USER_ROLE.BUYER;
  _id: string;
};

export type IContent = {
  fileName: string;
  content: string;
  filePath?: string;
};

export type IPackage = {
  name: string;
  version: string;
};

export enum ILanguage {
  // eslint-disable-next-line no-unused-vars
  JavaScript = 'js',
  // eslint-disable-next-line no-unused-vars
  Typescript = 'ts',
}

export enum ITechnology {
  // eslint-disable-next-line no-unused-vars
  ReactTemplate = 'react-template',
  // eslint-disable-next-line no-unused-vars
  ReactRedux = 'reactRedux-template',
  // eslint-disable-next-line no-unused-vars
  ReactReduxApi = 'reactRedux-api',
  // eslint-disable-next-line no-unused-vars
  NextJsTemplate = 'nextjs-template',
  // eslint-disable-next-line no-unused-vars
  NextJsReduxTemplate = 'nextjsRedux-template',
  // eslint-disable-next-line no-unused-vars
  NextJsReduxApi = 'nextjsRedux-api',
  // eslint-disable-next-line no-unused-vars
  MongooseTemplate = 'mongoose-template',
  // eslint-disable-next-line no-unused-vars
  MongooseModule = 'mongoose-modules',
  // eslint-disable-next-line no-unused-vars
  PostgresTemplate = 'mongoose-template',
  // eslint-disable-next-line no-unused-vars
  PostgresModule = 'mongoose-modules',
}

export type IAdditionalDependencies = {
  name: string;
  version: string;
};
