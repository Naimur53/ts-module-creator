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
exports.mongooseFolderCreatorService = void 0;
const archiver_1 = __importDefault(require("archiver"));
const indexRouterContentCreator_1 = __importDefault(require("../../../helpers/indexRouterContentCreator"));
const mongooseTemplatesContent_1 = __importDefault(require("../../../data/mongooseTemplatesContent"));
const mongoose_folder_creator_utils_1 = require("./mongoose.folder.creator.utils");
const createMongooseModules = ({ modules, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFilesAndFolder = [];
    mongoose_folder_creator_utils_1.mongooseGenerator.createModules(allFilesAndFolder, modules, true);
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
const createMongooseTemplate = ({ modules, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFilesAndFolder = JSON.parse(JSON.stringify(mongooseTemplatesContent_1.default));
    mongoose_folder_creator_utils_1.mongooseGenerator.createModules(allFilesAndFolder, modules);
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
exports.mongooseFolderCreatorService = {
    createMongooseTemplate,
    createMongooseModules,
};
