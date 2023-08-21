"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileName_1 = __importDefault(require("./fileName"));
const createConstant = (path, name) => {
    const { lowerCaseName } = (0, fileName_1.default)(name);
    fs_1.default.writeFileSync(path, ` 
    export const ${lowerCaseName}SearchableFields = [
        'searchTerm', 
      ];
   
  `);
};
exports.default = createConstant;
