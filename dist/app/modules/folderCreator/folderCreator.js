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
exports.folderCreator = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const archiver_1 = __importDefault(require("archiver"));
const CreateRouterFile_1 = __importDefault(require("../../../helpers/CreateRouterFile"));
const CreateModelFile_1 = __importDefault(require("../../../helpers/CreateModelFile"));
const CreateInterfaceFile_1 = __importDefault(require("../../../helpers/CreateInterfaceFile"));
const CreateControllerFile_1 = __importDefault(require("../../../helpers/CreateControllerFile"));
const CreateServiceFile_1 = __importDefault(require("../../../helpers/CreateServiceFile"));
const CreateConstantFile_1 = __importDefault(require("../../../helpers/CreateConstantFile"));
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a unique folder name based on a timestamp
    const { name } = req.params;
    console.log(name);
    const folderName = `${name}`;
    const folderPath = path_1.default.join(__dirname, 'downloads', folderName);
    // Ensure the folder exists
    fs_1.default.mkdirSync(folderPath, { recursive: true });
    console.log(folderPath);
    // Create the demo.ts file with content
    const routerFilePath = path_1.default.join(folderPath, `${name}.router.ts`);
    (0, CreateRouterFile_1.default)(routerFilePath, name);
    const modelFilePath = path_1.default.join(folderPath, `${name}.model.ts`);
    (0, CreateModelFile_1.default)(modelFilePath, name);
    const interFaceFilePath = path_1.default.join(folderPath, `${name}.interface.ts`);
    (0, CreateInterfaceFile_1.default)(interFaceFilePath, name);
    const controllerFilePath = path_1.default.join(folderPath, `${name}.controller.ts`);
    (0, CreateControllerFile_1.default)(controllerFilePath, name);
    const serviceFilePath = path_1.default.join(folderPath, `${name}.service.ts`);
    (0, CreateServiceFile_1.default)(serviceFilePath, name);
    const constantFilePath = path_1.default.join(folderPath, `${name}.constant.ts`);
    (0, CreateConstantFile_1.default)(constantFilePath, name);
    // Create a ZIP archive
    const archive = (0, archiver_1.default)('zip', {
        zlib: { level: 9 }, // Set compression level
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${folderName}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Pipe the archive to the response
    yield archive.pipe(res);
    // Append the dynamically generated folder to the ZIP archive
    yield archive.directory(folderPath, folderName);
    // Finalize the ZIP archive and send it as a downloadable response
    yield archive.finalize();
    // Optionally, you can remove the generated folder after sending the ZIP
    yield fs_1.default.rmdirSync(folderPath, { recursive: true });
    res.send('success');
});
exports.folderCreator = { createFolder };
