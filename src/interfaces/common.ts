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

export enum ITechnology {
  JavaScript = 'js',
  Typescript = 'ts',
}
