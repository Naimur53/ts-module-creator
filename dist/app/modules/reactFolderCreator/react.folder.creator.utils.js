"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactGenerator = exports.availableHooks = void 0;
const packageJsonFile_1 = require("./../../../helpers/packageJsonFile");
const reactPageContent_1 = require("../../../data/reactPageContent");
const reactTsHooks_1 = __importDefault(require("../../../data/reactTsHooks"));
const reduxFileContent_1 = require("../../../data/reduxFileContent");
const fileName_1 = __importDefault(require("../../../helpers/fileName"));
const singleFileCreatorHelper_1 = __importDefault(require("../../../helpers/singleFileCreatorHelper"));
const common_1 = require("../../../interfaces/common");
const reactTailwindFilesAndContent_1 = __importDefault(require("../../../data/reactTailwindFilesAndContent"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const firebaseFolder_1 = require("../../../data/firebaseFolder");
const firebaseHookGenerator_1 = require("../../../helpers/firebaseHookGenerator");
const reactJsHooks_1 = __importDefault(require("../../../data/reactJsHooks"));
const reduxConfigFile_1 = require("../../../data/reduxConfigFile");
exports.availableHooks = [
    'useCustomHook.ts',
    'useToggle.ts',
    'useTimeout.ts',
    'useDebounce.ts',
    'useUpdateEffect.ts',
    'useArray.ts',
    'usePrevious.ts',
    'useStateWithHistory.ts',
    'useStorage.ts',
    'useFetch.ts',
    'useEventListener.ts',
    'useOnScreen.ts',
    'useWindowSize.ts',
    'useAsync.ts',
];
const appFileContentGenerate = (pages) => {
    let allPageImport = ``;
    let allPageRoute = ``;
    pages.forEach(singlePage => {
        const { upperCaseName } = (0, fileName_1.default)(singlePage);
        allPageImport += `import ${upperCaseName} from "./Pages/${upperCaseName}/${upperCaseName}";
        `;
    });
    pages.forEach(singlePage => {
        const { upperCaseName, lowerCaseName } = (0, fileName_1.default)(singlePage);
        allPageRoute += `<Route path="/${upperCaseName === 'Home' ? '' : lowerCaseName}" element={<${upperCaseName}/>}></Route>
        `;
    });
    const content = `
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 
${allPageImport}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         ${allPageRoute}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
    `;
    return content;
};
const reactPagesGenerator = (pages, technology) => {
    let newPages = [];
    pages.forEach(singlePage => {
        const { lowerCaseName, upperCaseName } = (0, fileName_1.default)(singlePage);
        const singlePageInfo = {
            content: (0, singleFileCreatorHelper_1.default)(technology === common_1.ILanguage.JavaScript
                ? reactPageContent_1.reactPageContent.jsPage
                : reactPageContent_1.reactPageContent.tsPage, lowerCaseName, false),
            fileName: singlePage,
            filePath: `src\\Pages\\${upperCaseName}\\${upperCaseName}.${technology === common_1.ILanguage.JavaScript ? 'js' : 'tsx'}`,
        };
        newPages = [...newPages, singlePageInfo];
    });
    return newPages;
};
const createReduxFeaturesFile = (apis, technology, withoutSrc) => {
    let newReduxApiSlice = [];
    apis.forEach(singleName => {
        const { lowerCaseName } = (0, fileName_1.default)(singleName);
        const filePath = (extra) => `${withoutSrc ? '' : 'src\\redux\\features\\'}${singleName}\\${singleName}${extra}.${technology}`;
        const apiSlice = {
            content: (0, singleFileCreatorHelper_1.default)(reduxFileContent_1.reduxFileContent.reduxTsApiFileContent, lowerCaseName, false),
            fileName: singleName,
            filePath: filePath('Api'),
        };
        const reducerSlice = {
            content: (0, singleFileCreatorHelper_1.default)(common_1.ILanguage.JavaScript === technology
                ? reduxFileContent_1.reduxFileContent.reduxJsReducerContent
                : reduxFileContent_1.reduxFileContent.reduxTsReducerContent, lowerCaseName, false),
            fileName: singleName,
            filePath: filePath('Slice'),
        };
        const selector = {
            content: (0, singleFileCreatorHelper_1.default)(common_1.ILanguage.JavaScript === technology
                ? reduxFileContent_1.reduxFileContent.reduxJsSelector
                : reduxFileContent_1.reduxFileContent.reduxTsSelector, lowerCaseName, false),
            fileName: singleName,
            filePath: filePath('Selector'),
        };
        newReduxApiSlice = [...newReduxApiSlice, apiSlice, reducerSlice, selector];
    });
    return newReduxApiSlice;
};
const selectedHook = (requestedHook, technology) => {
    if (technology === common_1.ILanguage.JavaScript) {
        return reactJsHooks_1.default.filter(singleReactHook => {
            return requestedHook.find(singleExpectedHook => singleReactHook.fileName.includes(singleExpectedHook));
        });
    }
    else {
        return reactTsHooks_1.default.filter(singleReactHook => {
            return requestedHook.find(singleExpectedHook => singleReactHook.fileName.includes(singleExpectedHook));
        });
    }
};
const generateAllFolderAndFile = (name, fileAndFolders, archive) => {
    const uniqueFileAndFolders = fileAndFolders.reduceRight((accumulator, currentObject) => {
        const index = accumulator.findIndex(item => item.filePath === currentObject.filePath);
        if (index === -1) {
            accumulator.push(currentObject);
        }
        return accumulator;
    }, []);
    uniqueFileAndFolders.forEach(ele => {
        archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        (0, singleFileCreatorHelper_1.default)(ele.content, name, false), {
            name: ele.filePath + '',
        });
    });
};
const changeExistingFileContent = (filPath, content, allFilesAndFolder) => {
    const findIndex = allFilesAndFolder.findIndex(single => single.filePath === filPath);
    if (findIndex === -1) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'File not found to change');
    }
    allFilesAndFolder[findIndex].content = content;
};
const addWrapper = (allFileAndFolder, technology, importFrom, wrapperNameFirst, wrapperNameLast) => {
    const fileExtension = technology === common_1.ILanguage.JavaScript ? 'js' : 'tsx';
    const indexJsFile = allFileAndFolder.find(single => single.filePath === `src\\index.${fileExtension}`);
    if (!indexJsFile) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `can't find index.${fileExtension} File`);
    }
    if (wrapperNameFirst) {
        indexJsFile.content = indexJsFile.content.replace(/<React.StrictMode>([\s\S]*?)<\/React.StrictMode>/, `<React.StrictMode>
        <${wrapperNameFirst}>
          $1
        </${wrapperNameLast || wrapperNameFirst}>
      </React.StrictMode>`);
    }
    const startIndex = indexJsFile.content.indexOf('import React from');
    const endIndex = indexJsFile.content.indexOf('import reportWebVitals');
    if (startIndex !== -1 && endIndex !== -1) {
        const modifiedContent = indexJsFile.content.slice(0, endIndex) +
            importFrom +
            '\n' +
            indexJsFile.content.slice(endIndex);
        indexJsFile.content = modifiedContent;
        console.log(modifiedContent);
    }
    else {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'something went wrong to adding import in index.js');
    }
};
const addTailwindToReact = (allFilesAndFolder) => {
    // adding additional file
    allFilesAndFolder.push(...reactTailwindFilesAndContent_1.default);
    // get package json file
    // const packageFile = packageJsonFile.getPackageJsonFile(allFilesAndFolder);
    // // add dependencies
    // const newPackageFile = packageJsonFile.addDependencies(
    //   packageFile,
    //   [{ name: 'tailwindcss', version: '^3.3.3' }],
    //   true
    // );
    // // now add new package file
    // packageJsonFile.changePackageJsonFile(allFilesAndFolder, newPackageFile);
    packageJsonFile_1.packageJsonFile.addDependenciesToProject(allFilesAndFolder, [{ name: 'tailwindcss', version: '^3.3.3' }], true);
};
const addMUiToReact = (allFilesAndFolder) => {
    packageJsonFile_1.packageJsonFile.addDependenciesToProject(allFilesAndFolder, [
        { name: '@mui/material', version: '^5.14.10' },
        { name: '@emotion/react', version: '^11.11.1' },
        { name: '@emotion/styled', version: '^11.11.0' },
    ], true);
};
const addFirebase = (allFileAndFolder, firebaseAuth, technology) => {
    const fileName = `useFirebase.${technology}`;
    const useFirebaseHook = {
        fileName: fileName,
        filePath: 'src\\hooks\\' + fileName,
        content: firebaseHookGenerator_1.firebaseHookGenerator.generateUseFirebaseHookContent(firebaseAuth.auth, technology),
    };
    if (technology === common_1.ILanguage.JavaScript) {
        allFileAndFolder.push(...firebaseFolder_1.firebaseFolder.jsFolder, useFirebaseHook);
    }
    else {
        allFileAndFolder.push(...firebaseFolder_1.firebaseFolder.tsFolder, useFirebaseHook);
    }
    // add Env
    if (firebaseAuth.config && Object.keys(firebaseAuth.config).length) {
        const config = firebaseAuth.config;
        const envLocal = {
            fileName: 'env.local',
            filePath: 'env.local',
            content: `
REACT_APP_API_KEY=${config.apiKey}
REACT_APP_AUTH_DOMAIN=${config.authDomain}
REACT_APP_PROJECT_ID=${config.projectId}
REACT_APP_STORAGE_BUCKET=${config.storageBucket}
REACT_APP_MESSAGE_ID=${config.messagingSenderId}
REACT_APP_APP_ID=${config.appId}
REACT_APP_MEASUREMENT_ID=${config.measurementId}
        `,
        };
        console.log(config);
        allFileAndFolder.push(envLocal);
    }
    // add package
    packageJsonFile_1.packageJsonFile.addDependenciesToProject(allFileAndFolder, [
        { name: 'firebase', version: '^10.4.0' },
    ]);
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
  import { store } from "./redux/app/store";
  `, `Provider store={store}`, 'Provider');
};
exports.reactGenerator = {
    createReduxFeaturesFile,
    appFileContentGenerate,
    reactPagesGenerator,
    selectedHook,
    generateAllFolderAndFile,
    changeExistingFileContent,
    addTailwindToReact,
    addMUiToReact,
    addWrapper,
    addFirebase,
    addRedux,
};
