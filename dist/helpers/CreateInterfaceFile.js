"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileName_1 = __importDefault(require("./fileName"));
const createInterfaceFile = (path, name) => {
    const { upperCaseName } = (0, fileName_1.default)(name);
    fs_1.default.writeFileSync(path, ` 
import { Model } from 'mongoose';  

export type I${upperCaseName} = {
//   your type
};
export type ${upperCaseName}Model = Model<I${upperCaseName}, Record<string, unknown>>;
export type I${upperCaseName}Filters = {
  searchTerm?: string; 
};
 
   
  `);
};
exports.default = createInterfaceFile;
