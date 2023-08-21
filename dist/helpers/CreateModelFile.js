"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileName_1 = __importDefault(require("./fileName"));
const createModelFile = (path, name) => {
    const { upperCaseName, lowerCaseName } = (0, fileName_1.default)(name);
    fs_1.default.writeFileSync(path, `
import { Schema, model } from 'mongoose';
import { ${upperCaseName}Model, I${upperCaseName} } from './${lowerCaseName}.interface'; 
const ${lowerCaseName}Schema = new Schema<I${upperCaseName}>({
//  enter your schema
});

export const ${upperCaseName} = model<I${upperCaseName}, ${upperCaseName}Model>('${upperCaseName}', ${lowerCaseName}Schema);
   
  `);
};
exports.default = createModelFile;
