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
exports.prismaFolderCreator = void 0;
const archiver_1 = __importDefault(require("archiver"));
const singleFileCreatorHelper_1 = __importDefault(require("../../../helpers/singleFileCreatorHelper"));
const fileName_1 = __importDefault(require("../../../helpers/fileName"));
const prismaAllFileContents_1 = __importDefault(require("../../../data/prismaAllFileContents"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const indexRouterContentCreator_1 = __importDefault(require("../../../helpers/indexRouterContentCreator"));
const prismaTemplates_1 = __importDefault(require("../../../data/prismaTemplates"));
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shouldComment = false } = req.query;
    const { name } = req.params;
    const { lowerCaseName } = (0, fileName_1.default)(name);
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Pipe the archive to the response
    archive.pipe(res);
    prismaAllFileContents_1.default.forEach(ele => {
        archive.append((0, singleFileCreatorHelper_1.default)(ele.content, name, Boolean(shouldComment)), {
            name: `${name}/${lowerCaseName}.${ele.fileName}.ts`,
        });
    });
    // Finalize the ZIP archive and send it as a downloadable response
    yield archive.finalize();
    // res.send('success');
});
const createPrismaTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shouldComment = false } = req.query;
    const { modules = ['demo'] } = req.body;
    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);
    const foundWrongString = modules.find(str => {
        return str === '' || str[0].match(/\d/) || str[0].match(/[A-Z]/);
    });
    if (foundWrongString || foundWrongString === '') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'wrong type modules name detected');
    }
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Pipe the archive to the response
    archive.pipe(res);
    let newModules = [];
    modules.forEach(element => {
        const { lowerCaseName } = (0, fileName_1.default)(element);
        prismaAllFileContents_1.default.forEach(single => {
            const singleModules = {
                content: (0, singleFileCreatorHelper_1.default)(single.content, lowerCaseName, Boolean(shouldComment)),
                fileName: single.fileName,
                filePath: `src\\app\\modules\\${element}\\${lowerCaseName}.${single.fileName}.ts`,
            };
            newModules = [...newModules, singleModules];
        });
    });
    const allFilesAndFolder = [...prismaTemplates_1.default, ...newModules];
    // change content for routes/index.ts
    const routesIndexTsFilePath = 'src\\app\\routes\\index.ts';
    const routesIndexTsFileIndex = allFilesAndFolder.findIndex(single => single.filePath === routesIndexTsFilePath);
    allFilesAndFolder[routesIndexTsFileIndex].content =
        (0, indexRouterContentCreator_1.default)(modules);
    // create all folder and file
    allFilesAndFolder.forEach(ele => {
        archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        ele.content, {
            name: ele.filePath + '',
        });
    });
    // Finalize the ZIP archive and send it as a downloadable response
    yield archive.finalize();
}));
exports.prismaFolderCreator = { createFolder, createPrismaTemplate };
