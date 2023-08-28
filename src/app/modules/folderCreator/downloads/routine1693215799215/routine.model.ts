
import { Schema, model } from 'mongoose';
import { RoutineModel, IRoutine } from './routine.interface'; 
const routineSchema = new Schema<IRoutine>({
//  enter your schema
});

export const Routine = model<IRoutine, RoutineModel>('Routine', routineSchema);
   
  