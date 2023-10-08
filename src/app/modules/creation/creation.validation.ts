import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    technoloy: z.string({ required_error: 'technoloy is required' }),
    language: z.string({ required_error: 'language is required' }),
    createdBy: z.string({ required_error: 'createdBy is required' }),
  }),
});
const updateValidation = z.object({
  body: z.object({
    technoloy: z.string({ required_error: 'technoloy is required' }).optional(),
    language: z.string({ required_error: 'language is required' }).optional(),
    createdBy: z.string({ required_error: 'createdBy is required' }).optional(),
  }),
});
export const CreationValidation = {
  createValidation,
  updateValidation,
};
