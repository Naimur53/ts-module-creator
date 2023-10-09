import archiver from 'archiver';
import { IReactTemplateRequestService } from '../reactFolderCreator/react.folder.creator.interface';
import { IContent, ILanguage } from '../../../interfaces/common';
import { packageJsonFile } from '../../../helpers/packageJsonFile';
import { nextJsGenerator } from './nextJsFolderCreator.utils';
import { reactGenerator } from '../reactFolderCreator/react.folder.creator.utils';
import nextJsFileTsContent from '../../../data/nextJsFileTsContent';
import nextJsFileJsContent from '../../../data/nextJsFileJsContent';

const createNextTemplate = async ({
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
    JSON.stringify(
      technology === ILanguage.JavaScript
        ? nextJsFileJsContent
        : nextJsFileTsContent
    )
  );

  // for creating pages
  if (pages) {
    allFilesAndFolder.push(
      ...nextJsGenerator.nextPagesGenerator(pages, technology)
    );
  }
  // for api slice redux
  if (apis?.length) {
    allFilesAndFolder.push(
      ...reactGenerator.createReduxFeaturesFile(apis, technology)
    );
    // add redux
    nextJsGenerator.addRedux(allFilesAndFolder, technology);
  }
  // for hooks
  if (hooks) {
    allFilesAndFolder.push(...reactGenerator.selectedHook(hooks, technology));
  }

  // reactGenerator.addTailwindToReact(allFilesAndFolder);
  // adding others files Or folders
  if (othersFileFolder) {
    allFilesAndFolder.push(...othersFileFolder);
  }
  // add warper
  if (wrappers) {
    wrappers.forEach(ele => {
      nextJsGenerator.addWrapper(
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
  // create all folder and file
  reactGenerator.generateAllFolderAndFile(name, allFilesAndFolder, archive);

  // Finalize the ZIP archive and send it as a downloadable response
  // await archive.finalize();
  return archive;
};

export const nextJsFolderCreatorService = {
  createNextTemplate,
};
