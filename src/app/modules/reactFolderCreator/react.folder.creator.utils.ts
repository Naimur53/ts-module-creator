import fileName from '../../../helpers/fileName';

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

export const createReactAppFileContent = (pages: string[]) => {
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
