"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrismaFolderRoute = void 0;
const express_1 = __importDefault(require("express"));
const prisma_folder_creator_1 = require("./prisma.folder.creator");
const prisma_creator_controller_1 = require("./prisma.creator.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const mongoose_folder_creator_validation_1 = require("../mongooseFolderCreator/mongoose.folder.creator.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/tem/:name([a-zA-Z]+)', (0, auth_1.default)(), (0, validateRequest_1.default)(mongoose_folder_creator_validation_1.mongooseFolderCreatorValidation.mongooseFolderCreatorValidationSchema), prisma_creator_controller_1.prismaFolderCreatorController.createPrismaModules);
router.post('/:name([a-zA-Z]+)', (0, auth_1.default)(), (0, validateRequest_1.default)(mongoose_folder_creator_validation_1.mongooseFolderCreatorValidation.mongooseFolderCreatorValidationSchema), prisma_folder_creator_1.prismaFolderCreator.createFolder);
exports.createPrismaFolderRoute = router;
