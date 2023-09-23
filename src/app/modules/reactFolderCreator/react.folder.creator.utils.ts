import { packageJsonFile } from './../../../helpers/packageJsonFile';
import { Archiver } from 'archiver';
import { reactPageContent } from '../../../data/reactPageContent';
import reactTsHooks from '../../../data/reactTsHooks';
import reduxTsApiFileContent from '../../../data/reduxTsApiFileContent';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent, ITechnology } from '../../../interfaces/common';
import reactTailwindFilesAndContent from '../../../data/reactTailwindFilesAndContent';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { firebaseFolder } from '../../../data/firebaseFolder';
import { firebaseHookGenerator } from '../../../helpers/firebaseHookGenerator';
import { IFirebaseAuth } from './react.folder.creator.interface';
import reactJsHooks from '../../../data/reactJsHooks';
import { reduxConfigFile } from '../../../data/reduxConfigFile';

export const availableHooks = [
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

const appFileContentGenerate = (pages: string[]): string => {
  let allPageImport = ``;
  let allPageRoute = ``;

  pages.forEach(singlePage => {
    const { upperCaseName } = fileName(singlePage);
    allPageImport += `import ${upperCaseName} from "./Pages/${upperCaseName}/${upperCaseName}";
        `;
  });
  pages.forEach(singlePage => {
    const { upperCaseName, lowerCaseName } = fileName(singlePage);
    allPageRoute += `<Route path="/${
      upperCaseName === 'Home' ? '' : lowerCaseName
    }" element={<${upperCaseName}/>}></Route>
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

const reactPagesGenerator = (
  pages: string[],
  technology: ITechnology
): IContent[] => {
  let newPages: IContent[] = [];
  pages.forEach(singlePage => {
    const { lowerCaseName, upperCaseName } = fileName(singlePage);
    const singlePageInfo: IContent = {
      content: singleFileCreatorHelper(
        technology === ITechnology.JavaScript
          ? reactPageContent.jsPage
          : reactPageContent.tsPage,
        lowerCaseName,
        false
      ),
      fileName: singlePage,
      filePath: `src\\Pages\\${upperCaseName}\\${upperCaseName}.${
        technology === ITechnology.JavaScript ? 'js' : 'tsx'
      }`,
    };

    newPages = [...newPages, singlePageInfo];
  });
  return newPages;
};

const createReduxApiSlicesFile = (
  apis: string[],
  technology: ITechnology,
  withoutSrc?: boolean
): IContent[] => {
  let newReduxApiSlice: IContent[] = [];

  apis.forEach(singleName => {
    const { lowerCaseName } = fileName(singleName);
    const filePath = `${
      withoutSrc ? '' : 'src\\redux\\features\\'
    }${singleName}\\${singleName}Api.${technology}`;

    const singleModules = {
      content: singleFileCreatorHelper(
        reduxTsApiFileContent,
        lowerCaseName,
        false
      ),
      fileName: singleName,
      filePath,
    };
    newReduxApiSlice = [...newReduxApiSlice, singleModules];
  });
  return newReduxApiSlice;
};

const selectedHook = (
  requestedHook: string[],
  technology: ITechnology
): IContent[] => {
  if (technology === ITechnology.JavaScript) {
    return reactJsHooks.filter(singleReactHook => {
      return requestedHook.find(singleExpectedHook =>
        singleReactHook.fileName.includes(singleExpectedHook)
      );
    });
  } else {
    return reactTsHooks.filter(singleReactHook => {
      return requestedHook.find(singleExpectedHook =>
        singleReactHook.fileName.includes(singleExpectedHook)
      );
    });
  }
};

const generateAllFolderAndFile = (
  name: string,
  fileAndFolders: IContent[],
  archive: Archiver
): void => {
  fileAndFolders.forEach(ele => {
    archive.append(
      // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
      singleFileCreatorHelper(ele.content, name, false),

      {
        name: ele.filePath + '',
      }
    );
  });
};

const changeExistingFileContent = (
  filPath: string,
  content: string,
  allFilesAndFolder: IContent[]
): void => {
  console.log(filPath);
  const findIndex = allFilesAndFolder.findIndex(
    single => single.filePath === filPath
  );
  if (findIndex === -1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'File not found to change');
  }
  allFilesAndFolder[findIndex].content = content;
};

const addWrapper = (
  allFileAndFolder: IContent[],
  technology: ITechnology,
  importFrom: string,
  wrapperNameFirst?: string,
  wrapperNameLast?: string
): void => {
  const fileExtension = technology === ITechnology.JavaScript ? 'js' : 'tsx';
  const indexJsFile = allFileAndFolder.find(
    single => single.filePath === `src\\index.${fileExtension}`
  );

  if (!indexJsFile) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `can't find index.${fileExtension} File`
    );
  }
  if (wrapperNameFirst) {
    indexJsFile.content = indexJsFile.content.replace(
      /<React.StrictMode>([\s\S]*?)<\/React.StrictMode>/,
      `<React.StrictMode>
        <${wrapperNameFirst}>
          $1
        </${wrapperNameLast || wrapperNameFirst}>
      </React.StrictMode>`
    );
  }
  const startIndex = indexJsFile.content.indexOf('import React from');
  const endIndex = indexJsFile.content.indexOf('import reportWebVitals');

  if (startIndex !== -1 && endIndex !== -1) {
    const modifiedContent =
      indexJsFile.content.slice(0, endIndex) +
      importFrom +
      '\n' +
      indexJsFile.content.slice(endIndex);
    indexJsFile.content = modifiedContent;
    console.log(modifiedContent);
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'something went wrong to adding import in index.js'
    );
  }
};
const addTailwindToReact = (allFilesAndFolder: IContent[]): void => {
  // adding additional file
  allFilesAndFolder.push(...reactTailwindFilesAndContent);
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
  packageJsonFile.addDependenciesToProject(
    allFilesAndFolder,
    [{ name: 'tailwindcss', version: '^3.3.3' }],
    true
  );
};
const addMUiToReact = (allFilesAndFolder: IContent[]) => {
  packageJsonFile.addDependenciesToProject(
    allFilesAndFolder,
    [
      { name: '@mui/material', version: '^5.14.10' },
      { name: '@emotion/react', version: '^11.11.1' },
      { name: '@emotion/styled', version: '^11.11.0' },
    ],
    true
  );
};

const addFirebase = (
  allFileAndFolder: IContent[],
  firebaseAuth: IFirebaseAuth,
  technology: ITechnology
): void => {
  const fileName = `useFirebase.${technology}`;
  const useFirebaseHook: IContent = {
    fileName: fileName,
    filePath: 'src\\hooks\\' + fileName,
    content: firebaseHookGenerator.generateUseFirebaseHookContent(
      firebaseAuth.auth,
      technology
    ),
  };

  if (technology === ITechnology.JavaScript) {
    allFileAndFolder.push(...firebaseFolder.jsFolder, useFirebaseHook);
  } else {
    allFileAndFolder.push(...firebaseFolder.tsFolder, useFirebaseHook);
  }
  // add Env
  if (Object.keys(firebaseAuth.config).length) {
    const config = firebaseAuth.config;
    const envLocal: IContent = {
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
  packageJsonFile.addDependenciesToProject(allFileAndFolder, [
    { name: 'firebase', version: '^10.4.0' },
  ]);
};

const addRedux = (
  allFilesAndFolder: IContent[],
  technology: ITechnology
): void => {
  // add npm package
  packageJsonFile.addDependenciesToProject(allFilesAndFolder, [
    { name: '@reduxjs/toolkit', version: '^1.9.5' },
    { name: 'react-redux', version: '^8.1.1' },
  ]);
  if (technology === ITechnology.JavaScript) {
    allFilesAndFolder.push(...reduxConfigFile.reactReduxJsContent);
  } else {
    allFilesAndFolder.push(...reduxConfigFile.reactReduxTsContent);
  }
  addWrapper(
    allFilesAndFolder,
    technology,
    `import { Provider } from "react-redux";
  import { store } from "./redux/app/store";
  `,
    `Provider store={store}`,
    'Provider'
  );
};
export const reactGenerator = {
  createReduxApiSlicesFile,
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
