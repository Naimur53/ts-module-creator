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
exports.reactFolderCreatorService = void 0;
const archiver_1 = __importDefault(require("archiver"));
const common_1 = require("../../../interfaces/common");
const react_folder_creator_utils_1 = require("./react.folder.creator.utils");
const pureReact_1 = __importDefault(require("../../../data/pureReact"));
const packageJsonFile_1 = require("../../../helpers/packageJsonFile");
const reactTs_1 = __importDefault(require("../../../data/reactTs"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createReactReduxFeatures = ({ apis, name, technology, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFiles = [];
    if (!apis.length) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'api Slice names not found!');
    }
    allFiles.push(...react_folder_creator_utils_1.reactGenerator.createReduxFeaturesFile(apis, technology, true));
    react_folder_creator_utils_1.reactGenerator.generateAllFolderAndFile(name, allFiles, archive);
    return archive;
});
const createReactTemplate = ({ pages, apis, hooks, name, firebaseAuth, npmPackages, technology, wrappers, othersFileFolder, }) => __awaiter(void 0, void 0, void 0, function* () {
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    const allFilesAndFolder = JSON.parse(JSON.stringify(technology === common_1.ILanguage.JavaScript ? pureReact_1.default : reactTs_1.default));
    console.log('h', othersFileFolder);
    // for creating pages
    if (pages) {
        allFilesAndFolder.push(...react_folder_creator_utils_1.reactGenerator.reactPagesGenerator(pages, technology));
        const appFilePath = `src\\App.${technology === common_1.ILanguage.JavaScript ? technology : 'tsx'}`;
        react_folder_creator_utils_1.reactGenerator.changeExistingFileContent(appFilePath, react_folder_creator_utils_1.reactGenerator.appFileContentGenerate(pages), allFilesAndFolder);
    }
    // for api slice redux
    if (apis === null || apis === void 0 ? void 0 : apis.length) {
        allFilesAndFolder.push(...react_folder_creator_utils_1.reactGenerator.createReduxFeaturesFile(apis, technology));
        // add redux
        react_folder_creator_utils_1.reactGenerator.addRedux(allFilesAndFolder, technology);
    }
    // for hooks
    if (hooks) {
        allFilesAndFolder.push(...react_folder_creator_utils_1.reactGenerator.selectedHook(hooks, technology));
    }
    // reactGenerator.addTailwindToReact(allFilesAndFolder);
    // adding others files Or folders
    if (othersFileFolder === null || othersFileFolder === void 0 ? void 0 : othersFileFolder.length) {
        console.log('----------------------hi---------------------');
        allFilesAndFolder.push(...othersFileFolder);
    }
    // add warper
    if (wrappers === null || wrappers === void 0 ? void 0 : wrappers.length) {
        wrappers.forEach(ele => {
            react_folder_creator_utils_1.reactGenerator.addWrapper(allFilesAndFolder, technology, ele.importFrom, ele.wrapperNameFirst, ele.wrapperNameLast);
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
    // reactGenerator.addMUiToReact(allFilesAndFolder);
    // change app.ts content for pages
    // create all folder and file
    react_folder_creator_utils_1.reactGenerator.generateAllFolderAndFile(name, allFilesAndFolder, archive);
    // Finalize the ZIP archive and send it as a downloadable response
    // await archive.finalize();
    return archive;
});
exports.reactFolderCreatorService = {
    createReactReduxFeatures,
    createReactTemplate,
};
