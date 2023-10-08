import { NextFunction, Request, Response } from 'express';
import authJwtValidation from '../../helpers/authJwtValidation';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { User } from '../modules/user/user.model';

const auth =
  (forAdminOnly?: boolean) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      //get authorization token
      const token = req.headers.authorization;

      const verifiedUser = await authJwtValidation(token);
      if (!verifiedUser?.uid) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Token is not valid');
      }

      const isUserExist = await User.isUserExistByUid(verifiedUser.uid);

      if (isUserExist?.isBlocked || !isUserExist) {
        throw new ApiError(httpStatus.FORBIDDEN, 'You are blocked');
      }
      if (forAdminOnly && !isUserExist?.isAdmin) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
      req.user = {
        displayName: verifiedUser.name,
        email: verifiedUser.email,
        uid: verifiedUser.uid,
        _id: isUserExist?._id,
      }; //

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
