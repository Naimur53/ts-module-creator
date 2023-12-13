"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createValidation = zod_1.z.object({
    body: zod_1.z.object({
        uid: zod_1.z.string({ required_error: 'technoloy is required' }),
        displayName: zod_1.z
            .string({ required_error: 'language is required' })
            .default('unKnown')
            .optional(),
        email: zod_1.z.string({ required_error: 'email is required' }).optional(),
        photoURL: zod_1.z.string({ required_error: 'photoURL is required' }).optional(),
        emailVerified: zod_1.z
            .boolean({ required_error: 'emailVerified is required' })
            .optional(),
        createdAt: zod_1.z.string({ required_error: 'createAt is required' }),
        lastLoginAt: zod_1.z.string({ required_error: 'lastLoginAt is required' }),
        isBlocked: zod_1.z
            .boolean({ required_error: 'isBlocked is required' })
            .optional(),
        isAdmin: zod_1.z.boolean({ required_error: 'createdBy is required' }).optional(),
    }),
});
const updateValidation = zod_1.z.object({
    body: zod_1.z.object({
        uid: zod_1.z.string({ required_error: 'technoloy is required' }).optional(),
        displayName: zod_1.z
            .string({ required_error: 'language is required' })
            .default('unKnown')
            .optional(),
        email: zod_1.z.string({ required_error: 'createdBy is required' }).optional(),
        photoURL: zod_1.z.string({ required_error: 'createdBy is required' }).optional(),
        emailVerified: zod_1.z
            .boolean({ required_error: 'createdBy is required' })
            .optional(),
        createdAt: zod_1.z.string({ required_error: 'createdBy is required' }).optional(),
        lastLoginAt: zod_1.z
            .string({ required_error: 'createdBy is required' })
            .optional(),
        isBlocked: zod_1.z
            .boolean({ required_error: 'createdBy is required' })
            .optional(),
        isAdmin: zod_1.z.boolean({ required_error: 'createdBy is required' }).optional(),
    }),
});
exports.UserValidation = {
    createValidation,
    updateValidation,
};
