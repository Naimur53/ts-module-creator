import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { ILanguage, ITechnology } from '../../../interfaces/common';

export type ICreation = {
  technology: ITechnology;
  language: ILanguage;
  createdBy: Types.ObjectId | IUser;
};
export type CreationModel = {
  // method here
} & Model<ICreation, Record<string, unknown>>;
export type ICreationFilters = {
  searchTerm?: string;
};
