"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextJsGenerator = void 0;
const http_status_1 = __importDefault(require("http-status"));
const nextJsPageContent_1 = __importDefault(require("../../../data/nextJsPageContent"));
const fileName_1 = __importDefault(require("../../../helpers/fileName"));
const singleFileCreatorHelper_1 = __importDefault(require("../../../helpers/singleFileCreatorHelper"));
const common_1 = require("../../../interfaces/common");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const packageJsonFile_1 = require("../../../helpers/packageJsonFile");
const reduxConfigFile_1 = require("../../../data/reduxConfigFile");
const nextPagesGenerator = (pages, technology) => {
    let newPages = [];
    pages.forEach(singlePage => {
        const { lowerCaseName } = (0, fileName_1.default)(singlePage);
        const singlePageInfo = {
            content: (0, singleFileCreatorHelper_1.default)(nextJsPageContent_1.default, lowerCaseName, false),
            fileName: singlePage,
            filePath: `src\\pages\\${lowerCaseName}.${technology === common_1.ILanguage.JavaScript ? 'js' : 'tsx'}`,
        };
        newPages = [...newPages, singlePageInfo];
    });
    return newPages;
};
const addWrapper = (allFileAndFolder, technology, importFrom, wrapperNameFirst, wrapperNameLast) => {
    const fileExtension = technology === common_1.ILanguage.JavaScript ? 'js' : 'tsx';
    const appFile = allFileAndFolder.find(single => single.filePath === `src\\pages\\_app.${fileExtension}`);
    if (!appFile) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Can't find _app.${fileExtension} file in the pages directory. Make sure it exists.`);
    }
    // Replace with your desired import statements
    // If wrapperNameFirst is provided, wrap the existing content with the specified wrapper components
    if (wrapperNameFirst) {
        appFile.content = appFile.content.replace(/<Component {...pageProps} \/>/, `<${wrapperNameFirst}>
          <Component {...pageProps} />
        </${wrapperNameLast || wrapperNameFirst}>`);
    }
    // Add the import statements just after the existing import React statement
    const importReactIndex = appFile.content.indexOf(`import '@/styles/globals.css'`);
    if (importReactIndex !== -1) {
        const modifiedContent = appFile.content.slice(0, importReactIndex) +
            importFrom +
            '\n' +
            appFile.content.slice(importReactIndex);
        appFile.content = modifiedContent;
        console.log(modifiedContent);
    }
    else {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Unable to find the import statement for React in _app.js');
    }
};
const addRedux = (allFilesAndFolder, technology) => {
    // add npm package
    packageJsonFile_1.packageJsonFile.addDependenciesToProject(allFilesAndFolder, [
        { name: '@reduxjs/toolkit', version: '^1.9.5' },
        { name: 'react-redux', version: '^8.1.1' },
    ]);
    if (technology === common_1.ILanguage.JavaScript) {
        allFilesAndFolder.push(...reduxConfigFile_1.reduxConfigFile.reactReduxJsContent);
    }
    else {
        allFilesAndFolder.push(...reduxConfigFile_1.reduxConfigFile.reactReduxTsContent);
    }
    addWrapper(allFilesAndFolder, technology, `import { Provider } from "react-redux";
    import { store } from "@/redux/app/store";
    `, `Provider store={store}`, 'Provider');
};
exports.nextJsGenerator = {
    nextPagesGenerator,
    addWrapper,
    addRedux,
};
