"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseFolderCreatorValidation = void 0;
const zod_1 = require("zod");
const camelCase = /^[a-z][a-zA-Z]*$/;
const mongooseFolderCreatorValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        modules: zod_1.z.array(zod_1.z.object({
            name: zod_1.z
                .string({ required_error: 'module name is required' })
                .regex(camelCase),
            shouldAddPaginationAndQuery: zod_1.z.boolean().default(false).optional(),
            searchTermFields: zod_1.z.array(zod_1.z.string().regex(camelCase)).optional(),
            exactMatchFields: zod_1.z.array(zod_1.z.string().regex(camelCase)).optional(),
        })),
    }),
});
exports.mongooseFolderCreatorValidation = {
    mongooseFolderCreatorValidationSchema,
};
