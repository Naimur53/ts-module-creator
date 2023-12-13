"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(), user_controller_1.UserController.getAllUser);
router.get('/:id', (0, auth_1.default)(), user_controller_1.UserController.getSingleUser);
router.post('/', (0, validateRequest_1.default)(user_validation_1.UserValidation.createValidation), user_controller_1.UserController.signInUser);
router.patch('/:id', (0, validateRequest_1.default)(user_validation_1.UserValidation.updateValidation), (0, auth_1.default)(true), user_controller_1.UserController.updateUser);
router.delete('/:id', (0, auth_1.default)(true), user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
