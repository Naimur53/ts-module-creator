import { Schema, model } from 'mongoose';
import { CreationModel, ICreation } from './creation.interface';
const creationSchema = new Schema<ICreation>({
  technology: { type: String, required: true },
  language: { type: String, required: true },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export const Creation = model<ICreation, CreationModel>(
  'Creation',
  creationSchema
);
