"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaGenerator = void 0;
const prismaAllFileContents_1 = __importDefault(require("../../../data/prismaAllFileContents"));
const fileName_1 = __importDefault(require("../../../helpers/fileName"));
const singleFileCreatorHelper_1 = __importDefault(require("../../../helpers/singleFileCreatorHelper"));
const modulesGenerator = (modules, modulesOnly) => {
    let newModules = [];
    modules.forEach(element => {
        const { lowerCaseName } = (0, fileName_1.default)(element.name);
        prismaAllFileContents_1.default.forEach(single => {
            const filePath = `${modulesOnly ? '' : 'src\\app\\modules\\'}${lowerCaseName}\\${lowerCaseName}.${single.fileName}.ts`;
            console.log(filePath);
            const singleModules = {
                content: (0, singleFileCreatorHelper_1.default)(single.content, lowerCaseName, false),
                fileName: single.fileName,
                filePath,
            };
            newModules = [...newModules, singleModules];
        });
    });
    return newModules;
};
function mapTypeToPrismaType(type) {
    // Add mappings for your data types to Prisma types as needed
    // You can expand this function to handle other data types
    switch (type) {
        case 'string':
            return 'String';
        case 'number':
            return 'Int';
        case 'boolean':
            return 'Boolean';
        default:
            return 'String'; // Default to String if type is not recognized
    }
}
const schemaGenerator = (modules) => {
    let prismaSchema = `
  generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

  `;
    modules.forEach(module => {
        prismaSchema += `model ${module.name} {\n`;
        prismaSchema += `  id    String    @id @default(uuid()) @unique\n`;
        module.fields.forEach(field => {
            const fieldType = field.isRequired
                ? mapTypeToPrismaType(field.type)
                : `${mapTypeToPrismaType(field.type)}?`;
            prismaSchema += `  ${field.fieldName} ${fieldType}`;
            if (field.length) {
                prismaSchema += `@length(${field.length})`;
            }
            if (field.isUnique) {
                prismaSchema += '@unique';
            }
            prismaSchema += '\n';
        });
        prismaSchema += '}\n\n';
    });
    return {
        content: prismaSchema,
        fileName: 'schema.prisma',
        filePath: 'prisma\\schema.prisma',
    };
};
exports.prismaGenerator = {
    modulesGenerator,
    schemaGenerator,
};
