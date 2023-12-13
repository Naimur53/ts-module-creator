"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creation = void 0;
const mongoose_1 = require("mongoose");
const creationSchema = new mongoose_1.Schema({
    technology: { type: String, required: true },
    language: { type: String, required: true },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});
exports.Creation = (0, mongoose_1.model)('Creation', creationSchema);
