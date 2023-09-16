
        import { Schema, model } from 'mongoose';
        import { UserModel, IUser } from './user.interface'; 
        const userSchema = new Schema<IUser>({
        //  enter your schema
        });
        
        export const User = model<IUser, UserModel>('User', userSchema);