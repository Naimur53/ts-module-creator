"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const creation_controller_1 = require("./creation.controller");
const router = express_1.default.Router();
router.get('/', creation_controller_1.CreationController.getAllCreation);
router.get('/:id', creation_controller_1.CreationController.getSingleCreation);
router.post('/', creation_controller_1.CreationController.addCreation);
router.patch('/:id', creation_controller_1.CreationController.updateCreation);
router.delete('/:id', creation_controller_1.CreationController.deleteCreation);
exports.CreationRoutes = router;
