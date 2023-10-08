import { z } from 'zod';

// post request generate template
const camelCase = /^[a-z][a-zA-Z]*$/;
const hookRegex = /^use[A-Z][a-zA-Z]*(?:\.(js|ts))?$/;
const reactFolderCreatorTemplateSchema = z.object({
  body: z.object({
    apis: z.array(z.string().regex(camelCase)).optional(),
    pages: z.array(z.string().regex(camelCase)).optional(),
    hooks: z.array(z.string().regex(hookRegex)).optional(),
    firebaseAuth: z
      .object({
        config: z
          .object({
            apiKey: z.string({ required_error: 'apiKey is required' }),
            authDomain: z.string({ required_error: 'authDomain is required' }),
            projectId: z.string({ required_error: 'projectId is required' }),
            messagingSenderId: z.string({
              required_error: 'messagingSenderId is required',
            }),
            appId: z.string({ required_error: 'appId is required' }),
            measurementId: z.string({
              required_error: 'measurementId is required',
            }),
          })
          .optional(),
        auth: z.array(z.string()).optional(),
      })
      .optional(),
    technology: z.enum(['js', 'ts']),
    npmPackages: z
      .array(
        z.object({
          name: z.string({ required_error: 'package name is required' }),
          version: z.string({ required_error: 'package version is required' }),
          addToDevDependencies: z.boolean().optional().default(false),
        })
      )
      .optional(),
    wrappers: z
      .array(
        z.object({
          wrapperNameFirst: z.string().optional(),
          wrapperNameLast: z.string().optional(),
          importFrom: z.string({ required_error: 'importFrom is required' }),
        })
      )
      .optional(),
    othersFileFolder: z
      .array(
        z.object({
          fileName: z
            .string({ required_error: 'fileName is required' })
            .nonempty(),
          content: z
            .string({ required_error: 'content is required' })
            .nonempty(),
          filePath: z
            .string({ required_error: 'filePath is required' })
            .nonempty(),
        })
      )
      .optional(),
  }),
});

export const reactFolderCreatorZodValidation = {
  reactFolderCreatorTemplateSchema,
};
