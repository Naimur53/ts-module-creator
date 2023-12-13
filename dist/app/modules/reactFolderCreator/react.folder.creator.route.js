"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRectFolderRoute = void 0;
const express_1 = __importDefault(require("express"));
const react_folder_creator_controller_1 = require("./react.folder.creator.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const react_folder_creator_validation_1 = require("./react.folder.creator.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/tem/:name([a-zA-Z]+)', (0, auth_1.default)(), (0, validateRequest_1.default)(react_folder_creator_validation_1.reactFolderCreatorZodValidation.reactFolderCreatorTemplateSchema), react_folder_creator_controller_1.reactFolderCreatorController.createReactTemplate);
router.post('/redux/:name([a-zA-Z]+)', (0, auth_1.default)(), react_folder_creator_controller_1.reactFolderCreatorController.createReduxFile);
exports.createRectFolderRoute = router;
