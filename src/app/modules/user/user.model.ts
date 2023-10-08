import { Schema, model } from 'mongoose';
import { UserModel, IUser } from './user.interface';
const userSchema = new Schema<IUser>({
  //  enter your schema
  uid: {
    type: String,
    unique: true,
    required: true,
  },
  displayName: {
    type: String,
    default: () => 'unKnown',
  },
  email: {
    type: String,
  },
  photoURL: {
    type: String,
    default: 'https://i.ibb.co/ZXKnFd9/l60Hf.png',
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    require: true,
  },
  lastLoginAt: {
    type: Date,
    default: () => Date.now(),
    require: true,
  },
});
userSchema.statics.isUserExist = async function (
  email: string
): Promise<IUser | null> {
  return await User.findOne({ email });
};
userSchema.statics.isUserExistByUid = async function (
  uid: string
): Promise<IUser | null> {
  return await User.findOne({ uid }, { isBlocked: 1, isAdmin: 1 });
};

export const User = model<IUser, UserModel>('User', userSchema);
