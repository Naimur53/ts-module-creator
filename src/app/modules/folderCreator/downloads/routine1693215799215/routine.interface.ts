 
import { Model } from 'mongoose';  

export type IRoutine = {
//   your type
};
export type RoutineModel = Model<IRoutine, Record<string, unknown>>;
export type IRoutineFilters = {
  searchTerm?: string; 
};
 
   
  