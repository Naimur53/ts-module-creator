import httpStatus from 'http-status';
import nextJsPageContent from '../../../data/nextJsPageContent';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent, ITechnology } from '../../../interfaces/common';
import ApiError from '../../../errors/ApiError';
import { packageJsonFile } from '../../../helpers/packageJsonFile';
import { reduxConfigFile } from '../../../data/reduxConfigFile';

const nextPagesGenerator = (
  pages: string[],
  technology: ITechnology
): IContent[] => {
  let newPages: IContent[] = [];
  pages.forEach(singlePage => {
    const { lowerCaseName } = fileName(singlePage);
    const singlePageInfo: IContent = {
      content: singleFileCreatorHelper(nextJsPageContent, lowerCaseName, false),
      fileName: singlePage,
      filePath: `src\\pages\\${lowerCaseName}.${
        technology === ITechnology.JavaScript ? 'js' : 'tsx'
      }`,
    };

    newPages = [...newPages, singlePageInfo];
  });
  return newPages;
};

const addWrapper = (
  allFileAndFolder: IContent[],
  technology: ITechnology,
  importFrom: string,
  wrapperNameFirst?: string,
  wrapperNameLast?: string
): void => {
  const fileExtension = technology === ITechnology.JavaScript ? 'js' : 'tsx';
  const appFile = allFileAndFolder.find(
    single => single.filePath === `src\\pages\\_app.${fileExtension}`
  );

  if (!appFile) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Can't find _app.${fileExtension} file in the pages directory. Make sure it exists.`
    );
  }

  // Replace with your desired import statements

  // If wrapperNameFirst is provided, wrap the existing content with the specified wrapper components
  if (wrapperNameFirst) {
    appFile.content = appFile.content.replace(
      /<Component {...pageProps} \/>/,
      `<${wrapperNameFirst}>
          <Component {...pageProps} />
        </${wrapperNameLast || wrapperNameFirst}>`
    );
  }

  // Add the import statements just after the existing import React statement
  const importReactIndex = appFile.content.indexOf(
    `import '@/styles/globals.css'`
  );
  if (importReactIndex !== -1) {
    const modifiedContent =
      appFile.content.slice(0, importReactIndex) +
      importFrom +
      '\n' +
      appFile.content.slice(importReactIndex);
    appFile.content = modifiedContent;
    console.log(modifiedContent);
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Unable to find the import statement for React in _app.js'
    );
  }
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
    import { store } from "@/redux/app/store";
    `,
    `Provider store={store}`,
    'Provider'
  );
};
export const nextJsGenerator = {
  nextPagesGenerator,
  addWrapper,
  addRedux,
};
