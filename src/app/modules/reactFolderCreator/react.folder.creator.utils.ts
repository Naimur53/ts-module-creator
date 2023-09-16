import reactPageContent from '../../../data/reactPageContent';
import reactTsHooks from '../../../data/reactTsHooks';
import reduxTsApiFileContent from '../../../data/reduxTsApiFileContent';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent } from '../../../interfaces/common';

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
export const reactGenerator = {
  createReduxApiSlicesFile,
  appFileContentGenerate,
  reactPagesGenerator,
  selectedHook,
};
