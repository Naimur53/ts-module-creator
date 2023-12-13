"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNextJsFolderRoute = void 0;
const nextJsFolderCreator_controller_1 = require("./nextJsFolderCreator.controller");
const react_folder_creator_validation_1 = require("../reactFolderCreator/react.folder.creator.validation");
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/tem/:name([a-zA-Z]+)', (0, auth_1.default)(), (0, validateRequest_1.default)(react_folder_creator_validation_1.reactFolderCreatorZodValidation.reactFolderCreatorTemplateSchema), nextJsFolderCreator_controller_1.nextJsFolderCreatorController.createNextJsTemplate);
// router.get(
//   '/:name([a-zA-Z]+)',
//   reactFolderCreatorService.createReactReduxFeatures
// );
exports.createNextJsFolderRoute = router;
