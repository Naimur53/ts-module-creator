"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileName_1 = __importDefault(require("./fileName"));
const singleFileCreatorHelper = (content, name, shouldBeCommented) => {
    const { upperCaseName, lowerCaseName } = (0, fileName_1.default)(name);
    let modifiedCode = content
        .replace(/Demo/g, upperCaseName)
        .replace(/demo/g, lowerCaseName);
    if (shouldBeCommented) {
        modifiedCode = modifiedCode.replace(/^/gm, '// ');
    }
    return modifiedCode;
};
exports.default = singleFileCreatorHelper;
