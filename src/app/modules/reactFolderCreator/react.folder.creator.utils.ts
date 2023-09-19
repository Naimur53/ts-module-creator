import { packageJsonFile } from './../../../helpers/packageJsonFile';
import { Archiver } from 'archiver';
import reactPageContent from '../../../data/reactPageContent';
import reactTsHooks from '../../../data/reactTsHooks';
import reduxTsApiFileContent from '../../../data/reduxTsApiFileContent';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent } from '../../../interfaces/common';
import reactTailwindFilesAndContent from '../../../data/reactTailwindFilesAndContent';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

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

const reactPagesGenerator = (pages: string[]): IContent[] => {
  let newPages: IContent[] = [];
  pages.forEach(singlePage => {
    const { lowerCaseName, upperCaseName } = fileName(singlePage);
    const singlePageInfo: IContent = {
      content: singleFileCreatorHelper(reactPageContent, lowerCaseName, false),
      fileName: singlePage,
      filePath: `src\\Pages\\${upperCaseName}\\${upperCaseName}.tsx`,
    };

    newPages = [...newPages, singlePageInfo];
  });
  return newPages;
};

const createReduxApiSlicesFile = (apis: string[]): IContent[] => {
  let newReduxApiSlice: IContent[] = [];

  apis.forEach(singleName => {
    const { lowerCaseName } = fileName(singleName);

    const singleModules = {
      content: singleFileCreatorHelper(
        reduxTsApiFileContent,
        lowerCaseName,
        false
      ),
      fileName: singleName,
      filePath: `src\\redux\\features\\${singleName}\\${singleName}Api.ts`,
    };
    newReduxApiSlice = [...newReduxApiSlice, singleModules];
  });
  return newReduxApiSlice;
};

const selectedHook = (requestedHook: string[]): IContent[] => {
  reactTsHooks.filter(singleReactHook => {
    return requestedHook.find(singleExpectedHook =>
      singleReactHook.fileName.includes(singleExpectedHook)
    );
  });
  return reactTsHooks;
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
  const findIndex = allFilesAndFolder.findIndex(
    single => single.filePath === filPath
  );
  allFilesAndFolder[findIndex].content = content;
};

const addWrapper = (
  allFileAndFolder: IContent[],
  wrapperName: string | undefined,
  importFrom: string
): void => {
  const indexJsFile = allFileAndFolder.find(
    single => single.filePath === 'src\\index.js'
  );

  if (!indexJsFile) {
    throw new ApiError(httpStatus.BAD_REQUEST, `can't find index.js File`);
  }
  if (wrapperName) {
    indexJsFile.content = indexJsFile.content.replace(
      /<React.StrictMode>([\s\S]*?)<\/React.StrictMode>/,
      `<React.StrictMode>
        <${wrapperName}>
          $1
        </${wrapperName}>
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
};
