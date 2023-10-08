import httpStatus from 'http-status';
import ApiError from '../errors/ApiError';
import config from '../config';
import admin, { ServiceAccount } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

if (config.firebase) {
  admin.initializeApp({
    credential: admin.credential.cert(config.firebase as ServiceAccount),
  });
}
const auth = admin.auth();

async function authJwtValidation(
  token: string | undefined
): Promise<DecodedIdToken | null> {
  // if no token found
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;

  verifiedUser = await auth.verifyIdToken(token);
  // // role guard
  // if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
  //   throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  // }
  return verifiedUser;
}
export default authJwtValidation;
