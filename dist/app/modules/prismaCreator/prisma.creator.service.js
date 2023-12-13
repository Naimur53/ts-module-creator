"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaFolderCreatorService = void 0;
const archiver_1 = __importDefault(require("archiver"));
const indexRouterContentCreator_1 = __importDefault(require("../../../helpers/indexRouterContentCreator"));
const prisma_creator_utils_1 = require("./prisma.creator.utils");
const prismaTemplates_1 = __importDefault(require("../../../data/prismaTemplates"));
const createPrismaTemplate = ({ modules, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const newModules = prisma_creator_utils_1.prismaGenerator.modulesGenerator(modules);
    const prismaSchemaFile = prisma_creator_utils_1.prismaGenerator.schemaGenerator(modules);
    const allFilesAndFolder = [
        ...prismaTemplates_1.default,
        prismaSchemaFile,
        ...newModules,
    ];
    // change content for routes/index.ts
    const routesIndexTsFilePath = 'src\\app\\routes\\index.ts';
    const routesIndexTsFileIndex = allFilesAndFolder.findIndex(single => single.filePath === routesIndexTsFilePath);
    allFilesAndFolder[routesIndexTsFileIndex].content =
        (0, indexRouterContentCreator_1.default)(modules.map(single => single.name));
    // create all folder and file
    allFilesAndFolder.forEach(ele => {
        archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        ele.content, {
            name: ele.filePath + '',
        });
    });
    return archive;
});
const createPrismaModules = ({ modules, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFilesAndFolder = prisma_creator_utils_1.prismaGenerator.modulesGenerator(modules, true);
    // create all folder and file
    allFilesAndFolder.forEach(ele => {
        archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        ele.content, {
            name: ele.filePath + '',
        });
    });
    return archive;
});
exports.prismaFolderCreatorService = {
    createPrismaTemplate,
    createPrismaModules,
};
