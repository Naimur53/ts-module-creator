"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationValidation = void 0;
const zod_1 = require("zod");
const createValidation = zod_1.z.object({
    body: zod_1.z.object({
        technoloy: zod_1.z.string({ required_error: 'technoloy is required' }),
        language: zod_1.z.string({ required_error: 'language is required' }),
        createdBy: zod_1.z.string({ required_error: 'createdBy is required' }),
    }),
});
const updateValidation = zod_1.z.object({
    body: zod_1.z.object({
        technoloy: zod_1.z.string({ required_error: 'technoloy is required' }).optional(),
        language: zod_1.z.string({ required_error: 'language is required' }).optional(),
        createdBy: zod_1.z.string({ required_error: 'createdBy is required' }).optional(),
    }),
});
exports.CreationValidation = {
    createValidation,
    updateValidation,
};
