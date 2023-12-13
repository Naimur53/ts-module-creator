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
exports.reactFolderCreatorController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const react_folder_creator_service_1 = require("./react.folder.creator.service");
const modulesStringChecker_1 = __importDefault(require("../../../helpers/modulesStringChecker"));
const creation_service_1 = require("../creation/creation.service");
const common_1 = require("../../../interfaces/common");
const createReduxFile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { shouldComment = false } = req.query;
    const { apis = [], technology } = req.body;
    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);
    //throw error if something is wrong with apis pages and hooks
    (0, modulesStringChecker_1.default)([...apis]);
    const archive = yield react_folder_creator_service_1.reactFolderCreatorService.createReactReduxFeatures({
        apis,
        name,
        technology,
        shouldComment: Boolean(shouldComment),
    });
    yield creation_service_1.CreationService.addCreation({
        createdBy: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
        language: common_1.ILanguage.Typescript,
        technology: common_1.ITechnology.ReactReduxApi,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Pipe the archive to the response
    archive.pipe(res);
    yield archive.finalize();
}));
const createReactTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { shouldComment = false } = req.query;
    const { apis, pages = ['home'], hooks = ['useCustomHook'], firebaseAuth, technology, npmPackages, othersFileFolder, wrappers, } = req.body;
    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);
    //throw error if something is wrong with apis pages and hooks
    (0, modulesStringChecker_1.default)([...pages, ...hooks]);
    const archive = yield react_folder_creator_service_1.reactFolderCreatorService.createReactTemplate({
        apis,
        hooks,
        firebaseAuth,
        name,
        pages,
        technology,
        npmPackages,
        othersFileFolder,
        wrappers,
        shouldComment: Boolean(shouldComment),
    });
    yield creation_service_1.CreationService.addCreation({
        createdBy: (_b = req.user) === null || _b === void 0 ? void 0 : _b._id,
        language: common_1.ILanguage.Typescript,
        technology: (apis === null || apis === void 0 ? void 0 : apis.length)
            ? common_1.ITechnology.ReactReduxApi
            : common_1.ITechnology.ReactTemplate,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Pipe the archive to the response
    archive.pipe(res);
    yield archive.finalize();
}));
exports.reactFolderCreatorController = {
    createReactTemplate,
    createReduxFile,
};
