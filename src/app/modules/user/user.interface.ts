 
        import { Model } from 'mongoose';  
        
        export type IUser = {
        //   your type
        };
        export type UserModel = Model<IUser, Record<string, unknown>>;
        export type IUserFilters = {
          searchTerm?: string; 
        };
         