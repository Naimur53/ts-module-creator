import { z } from 'zod';
const camelCase = /^[a-z][a-zA-Z]*$/;
const mongooseFolderCreatorValidationSchema = z.object({
  body: z.object({
    modules: z.array(
      z.object({
        name: z
          .string({ required_error: 'module name is required' })
          .regex(camelCase),
        shouldAddPaginationAndQuery: z.boolean().default(false).optional(),
        searchTermFields: z.array(z.string().regex(camelCase)).optional(),
        exactMatchFields: z.array(z.string().regex(camelCase)).optional(),
      })
    ),
  }),
});

export const mongooseFolderCreatorValidation = {
  mongooseFolderCreatorValidationSchema,
};
