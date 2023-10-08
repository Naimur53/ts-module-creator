import { Model } from 'mongoose';

export type IUser = {
  //   your type
  _id?: string;
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  isBlocked: boolean;
  isAdmin: boolean;
  createdAt: Date;
  lastLoginAt: Date;
};

export type UserModel = {
  // eslint-disable-next-line no-unused-vars
  isUserExist(email: string): Promise<IUser | null>;
  // eslint-disable-next-line no-unused-vars
  isUserExistByUid(
    // eslint-disable-next-line no-unused-vars
    uid: string
  ): Promise<Pick<IUser, '_id' | 'isBlocked' | 'isAdmin'> | null>;
} & Model<IUser, Record<string, unknown>>;

export type IUserFilters = {
  searchTerm?: string;
};
