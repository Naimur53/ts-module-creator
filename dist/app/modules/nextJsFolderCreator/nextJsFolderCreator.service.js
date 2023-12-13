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
exports.nextJsFolderCreatorService = void 0;
const archiver_1 = __importDefault(require("archiver"));
const common_1 = require("../../../interfaces/common");
const packageJsonFile_1 = require("../../../helpers/packageJsonFile");
const nextJsFolderCreator_utils_1 = require("./nextJsFolderCreator.utils");
const react_folder_creator_utils_1 = require("../reactFolderCreator/react.folder.creator.utils");
const nextJsFileTsContent_1 = __importDefault(require("../../../data/nextJsFileTsContent"));
const nextJsFileJsContent_1 = __importDefault(require("../../../data/nextJsFileJsContent"));
const createNextTemplate = ({ pages, apis, hooks, name, firebaseAuth, npmPackages, technology, wrappers, othersFileFolder, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFilesAndFolder = JSON.parse(JSON.stringify(technology === common_1.ILanguage.JavaScript
        ? nextJsFileJsContent_1.default
        : nextJsFileTsContent_1.default));
    // for creating pages
    if (pages) {
        allFilesAndFolder.push(...nextJsFolderCreator_utils_1.nextJsGenerator.nextPagesGenerator(pages, technology));
    }
    // for api slice redux
    if (apis === null || apis === void 0 ? void 0 : apis.length) {
        allFilesAndFolder.push(...react_folder_creator_utils_1.reactGenerator.createReduxFeaturesFile(apis, technology));
        // add redux
        nextJsFolderCreator_utils_1.nextJsGenerator.addRedux(allFilesAndFolder, technology);
    }
    // for hooks
    if (hooks) {
        allFilesAndFolder.push(...react_folder_creator_utils_1.reactGenerator.selectedHook(hooks, technology));
    }
    // reactGenerator.addTailwindToReact(allFilesAndFolder);
    // adding others files Or folders
    if (othersFileFolder) {
        allFilesAndFolder.push(...othersFileFolder);
    }
    // add warper
    if (wrappers) {
        wrappers.forEach(ele => {
            nextJsFolderCreator_utils_1.nextJsGenerator.addWrapper(allFilesAndFolder, technology, ele.importFrom, ele.wrapperNameFirst, ele.wrapperNameLast);
        });
    }
    if (npmPackages === null || npmPackages === void 0 ? void 0 : npmPackages.length) {
        npmPackages.forEach(single => {
            packageJsonFile_1.packageJsonFile.addDependenciesToProject(allFilesAndFolder, [{ name: single.name, version: single.version }], single.addToDevDependencies);
        });
    }
    // add firebaseAuth
    if (firebaseAuth === null || firebaseAuth === void 0 ? void 0 : firebaseAuth.auth) {
        react_folder_creator_utils_1.reactGenerator.addFirebase(allFilesAndFolder, firebaseAuth, technology);
    }
    // create all folder and file
    react_folder_creator_utils_1.reactGenerator.generateAllFolderAndFile(name, allFilesAndFolder, archive);
    // Finalize the ZIP archive and send it as a downloadable response
    // await archive.finalize();
    return archive;
});
exports.nextJsFolderCreatorService = {
    createNextTemplate,
};
