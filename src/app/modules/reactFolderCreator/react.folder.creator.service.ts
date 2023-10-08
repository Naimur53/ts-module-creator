import archiver, { Archiver } from 'archiver';
import { IContent, ILanguage } from '../../../interfaces/common';
import { IReactTemplateRequestService } from './react.folder.creator.interface';
import { reactGenerator } from './react.folder.creator.utils';
import pureReact from '../../../data/pureReact';
import { packageJsonFile } from '../../../helpers/packageJsonFile';
import reactTs from '../../../data/reactTs';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createReactReduxFeatures = async ({
  apis,
  name,
  technology,
}: {
  apis: string[];
  shouldComment: boolean;
  name: string;
  technology: ILanguage;
}): Promise<Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });
  const allFiles: IContent[] = [];
  if (!apis.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'api Slice names not found!');
  }
  allFiles.push(
    ...reactGenerator.createReduxApiSlicesFile(apis, technology, true)
  );
  reactGenerator.generateAllFolderAndFile(name, allFiles, archive);
  return archive;
};

const createReactTemplate = async ({
  pages,
  apis,
  hooks,
  name,
  firebaseAuth,
  npmPackages,
  technology,
  wrappers,
  othersFileFolder,
}: IReactTemplateRequestService): Promise<archiver.Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  const allFilesAndFolder: IContent[] = JSON.parse(
    JSON.stringify(technology === ILanguage.JavaScript ? pureReact : reactTs)
  );
  console.log('h', othersFileFolder);
  // for creating pages
  if (pages) {
    allFilesAndFolder.push(
      ...reactGenerator.reactPagesGenerator(pages, technology)
    );
    const appFilePath = `src\\App.${
      technology === ILanguage.JavaScript ? technology : 'tsx'
    }`;
    reactGenerator.changeExistingFileContent(
      appFilePath,
      reactGenerator.appFileContentGenerate(pages),
      allFilesAndFolder
    );
  }
  // for api slice redux
  if (apis?.length) {
    allFilesAndFolder.push(
      ...reactGenerator.createReduxApiSlicesFile(apis, technology)
    );
    // add redux
    reactGenerator.addRedux(allFilesAndFolder, technology);
  }
  // for hooks
  if (hooks) {
    allFilesAndFolder.push(...reactGenerator.selectedHook(hooks, technology));
  }

  // reactGenerator.addTailwindToReact(allFilesAndFolder);
  // adding others files Or folders
  if (othersFileFolder?.length) {
    console.log('----------------------hi---------------------');
    allFilesAndFolder.push(...othersFileFolder);
  }
  // add warper
  if (wrappers?.length) {
    wrappers.forEach(ele => {
      reactGenerator.addWrapper(
        allFilesAndFolder,
        technology,
        ele.importFrom,
        ele.wrapperNameFirst,
        ele.wrapperNameLast
      );
    });
  }
  if (npmPackages?.length) {
    npmPackages.forEach(single => {
      packageJsonFile.addDependenciesToProject(
        allFilesAndFolder,
        [{ name: single.name, version: single.version }],
        single.addToDevDependencies
      );
    });
  }
  // add firebaseAuth
  if (firebaseAuth?.auth) {
    reactGenerator.addFirebase(allFilesAndFolder, firebaseAuth, technology);
  }
  // reactGenerator.addMUiToReact(allFilesAndFolder);
  // change app.ts content for pages

  // create all folder and file
  reactGenerator.generateAllFolderAndFile(name, allFilesAndFolder, archive);

  // Finalize the ZIP archive and send it as a downloadable response
  // await archive.finalize();
  return archive;
};

export const reactFolderCreatorService = {
  createReactReduxFeatures,
  createReactTemplate,
};
