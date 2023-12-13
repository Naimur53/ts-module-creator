"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactFolderCreatorZodValidation = void 0;
const zod_1 = require("zod");
// post request generate template
const camelCase = /^[a-z][a-zA-Z]*$/;
const hookRegex = /^use[A-Z][a-zA-Z]*(?:\.(js|ts))?$/;
const reactFolderCreatorTemplateSchema = zod_1.z.object({
    body: zod_1.z.object({
        apis: zod_1.z.array(zod_1.z.string().regex(camelCase)).optional(),
        pages: zod_1.z.array(zod_1.z.string().regex(camelCase)).optional(),
        hooks: zod_1.z.array(zod_1.z.string().regex(hookRegex)).optional(),
        firebaseAuth: zod_1.z
            .object({
            config: zod_1.z
                .object({
                apiKey: zod_1.z.string({ required_error: 'apiKey is required' }),
                authDomain: zod_1.z.string({ required_error: 'authDomain is required' }),
                projectId: zod_1.z.string({ required_error: 'projectId is required' }),
                messagingSenderId: zod_1.z.string({
                    required_error: 'messagingSenderId is required',
                }),
                appId: zod_1.z.string({ required_error: 'appId is required' }),
                measurementId: zod_1.z.string({
                    required_error: 'measurementId is required',
                }),
            })
                .optional(),
            auth: zod_1.z.array(zod_1.z.string()).optional(),
        })
            .optional(),
        technology: zod_1.z.enum(['js', 'ts']),
        npmPackages: zod_1.z
            .array(zod_1.z.object({
            name: zod_1.z.string({ required_error: 'package name is required' }),
            version: zod_1.z.string({ required_error: 'package version is required' }),
            addToDevDependencies: zod_1.z.boolean().optional().default(false),
        }))
            .optional(),
        wrappers: zod_1.z
            .array(zod_1.z.object({
            wrapperNameFirst: zod_1.z.string().optional(),
            wrapperNameLast: zod_1.z.string().optional(),
            importFrom: zod_1.z.string({ required_error: 'importFrom is required' }),
        }))
            .optional(),
        othersFileFolder: zod_1.z
            .array(zod_1.z.object({
            fileName: zod_1.z
                .string({ required_error: 'fileName is required' })
                .nonempty(),
            content: zod_1.z
                .string({ required_error: 'content is required' })
                .nonempty(),
            filePath: zod_1.z
                .string({ required_error: 'filePath is required' })
                .nonempty(),
        }))
            .optional(),
    }),
});
exports.reactFolderCreatorZodValidation = {
    reactFolderCreatorTemplateSchema,
};
