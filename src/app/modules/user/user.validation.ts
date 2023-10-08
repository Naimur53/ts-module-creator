import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    uid: z.string({ required_error: 'technoloy is required' }),
    displayName: z
      .string({ required_error: 'language is required' })
      .default('unKnown')
      .optional(),
    email: z.string({ required_error: 'email is required' }).optional(),
    photoURL: z.string({ required_error: 'photoURL is required' }).optional(),
    emailVerified: z
      .boolean({ required_error: 'emailVerified is required' })
      .optional(),
    createdAt: z.string({ required_error: 'createAt is required' }),
    lastLoginAt: z.string({ required_error: 'lastLoginAt is required' }),
    isBlocked: z
      .boolean({ required_error: 'isBlocked is required' })
      .optional(),
    isAdmin: z.boolean({ required_error: 'createdBy is required' }).optional(),
  }),
});
const updateValidation = z.object({
  body: z.object({
    uid: z.string({ required_error: 'technoloy is required' }).optional(),
    displayName: z
      .string({ required_error: 'language is required' })
      .default('unKnown')
      .optional(),
    email: z.string({ required_error: 'createdBy is required' }).optional(),
    photoURL: z.string({ required_error: 'createdBy is required' }).optional(),
    emailVerified: z
      .boolean({ required_error: 'createdBy is required' })
      .optional(),
    createdAt: z.string({ required_error: 'createdBy is required' }).optional(),
    lastLoginAt: z
      .string({ required_error: 'createdBy is required' })
      .optional(),
    isBlocked: z
      .boolean({ required_error: 'createdBy is required' })
      .optional(),
    isAdmin: z.boolean({ required_error: 'createdBy is required' }).optional(),
  }),
});
export const UserValidation = {
  createValidation,
  updateValidation,
};
