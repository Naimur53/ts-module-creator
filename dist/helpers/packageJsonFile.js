"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageJsonFile = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const getPackageJsonFile = (allFileAndFolder) => {
    const packageFile = allFileAndFolder.find(single => single.filePath === 'package.json');
    if (!(packageFile === null || packageFile === void 0 ? void 0 : packageFile.content)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `can't find package.json file`);
    }
    return packageFile === null || packageFile === void 0 ? void 0 : packageFile.content;
};
const changePackageJsonFile = (allFileAndFolder, newPackage) => {
    const packageFileIndex = allFileAndFolder.findIndex(single => single.filePath === 'package.json');
    allFileAndFolder[packageFileIndex].content = newPackage;
};
const addDependencies = (jsonString, additionalDependencies, toDevDependencies = false) => {
    try {
        // Parse the JSON string into an object
        const config = JSON.parse(jsonString);
        // Check if the "dependencies" property exists
        if (!config.dependencies) {
            config.dependencies = {};
        }
        if (!config.devDependencies) {
            config.devDependencies = {};
        }
        const createObj = {};
        additionalDependencies.forEach(single => {
            createObj[single.name] = single.version;
        });
        // Add the additional dependencies to the "dependencies" property
        if (toDevDependencies) {
            Object.assign(config.devDependencies, createObj);
        }
        else {
            Object.assign(config.dependencies, createObj);
        }
        // Convert the modified object back to a JSON string
        const updatedJsonString = JSON.stringify(config);
        return updatedJsonString;
    }
    catch (error) {
        console.error('Error parsing or updating JSON:', error);
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `can't parse package.json`); // Return the original string if there's an error
    }
};
const addDependenciesToProject = (allFilesAndFolder, packages, toDevDependencies) => {
    const packageFile = getPackageJsonFile(allFilesAndFolder);
    // add dependencies
    const newPackageFile = addDependencies(packageFile, packages, toDevDependencies);
    // now add new package file
    changePackageJsonFile(allFilesAndFolder, newPackageFile);
};
exports.packageJsonFile = {
    getPackageJsonFile,
    changePackageJsonFile,
    addDependencies,
    addDependenciesToProject,
};
