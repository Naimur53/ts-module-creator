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
exports.fileToJsonCreatorService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fileToJsonCreator = () => __awaiter(void 0, void 0, void 0, function* () {
    function readDirectoryRecursively(rootDir) {
        const filesArray = [];
        function readDirectory(dir, currentPath) {
            // Read the contents of the directory
            const files = fs_1.default.readdirSync(dir);
            // Iterate through the files and subdirectories
            for (const file of files) {
                const filePath = path_1.default.join(dir, file);
                const stat = fs_1.default.statSync(filePath);
                if (stat.isDirectory()) {
                    // Recursively read subdirectories
                    readDirectory(filePath, path_1.default.join(currentPath, file));
                }
                else {
                    // Read file content as binary
                    const content = fs_1.default.readFileSync(filePath, 'binary');
                    // Create an object with file information
                    const fileInfo = {
                        fileName: file,
                        filePath: path_1.default.join(currentPath, file),
                        content: content,
                    };
                    // Add the file information object to the array
                    filesArray.push(fileInfo);
                }
            }
        }
        readDirectory(rootDir, ''); // Start with an empty currentPath
        return filesArray;
    }
    const rootPath = 'src/templates/ts-node-server-mongo'; // Root path
    const fileObjectsArray = readDirectoryRecursively(rootPath);
    return fileObjectsArray;
});
exports.fileToJsonCreatorService = {
    fileToJsonCreator,
};
