"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileToJsonCreatorRoute = void 0;
const express_1 = __importDefault(require("express"));
const file_json_creator_controller_1 = require("./file.json.creator.controller");
const router = express_1.default.Router();
router.get('/', file_json_creator_controller_1.fileToJsonCreatorController.fileToJsonCreator);
exports.FileToJsonCreatorRoute = router;
