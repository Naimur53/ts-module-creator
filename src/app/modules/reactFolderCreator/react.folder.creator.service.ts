import archiver from 'archiver';
import { Request, Response } from 'express';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent } from '../../../interfaces/common';
import reduxTsApiFileContent from '../../../data/reduxTsApiFileContent';
import reactReduxTemplates from '../../../data/reactReduxTemplates';
import { IReactReduxTemplateRequestService } from './react.folder.creator.interface';
import { reactGenerator } from './react.folder.creator.utils';
import pureReact from '../../../data/pureReact';

const createReactReduxFeatures = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { shouldComment = false } = req.query;

  const { name } = req.params;
  //   const { lowerCaseName } = fileName(name);

  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  // Set headers to trigger the download
  res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Pipe the archive to the response
  archive.pipe(res);

  archive.append(
    singleFileCreatorHelper(
      reduxTsApiFileContent,
      name,
      Boolean(shouldComment)
    ),
    {
      name: `${name}/${name}Api.ts`,
    }
  );
  //   prismaAllFileContents.forEach(ele => {
  //     archive.append(
  //       singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
  //       {
  //         name: `${name}/${lowerCaseName}.${ele.fileName}.ts`,
  //       }
  //     );
  //   });

  // Finalize the ZIP archive and send it as a downloadable response
  await archive.finalize();
  // res.send('success');
};

const createReactReduxTemplate = async ({
  pages,
  apis,
  hooks,
  name,
  cssFrameWork,
  firebaseAuth,
  npmPackages,
  technology,
  wrappers,
  othersFileFolder,
}: IReactReduxTemplateRequestService): Promise<archiver.Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  // for creating pages
  let newPages: IContent[] = [];
  if (pages) {
    newPages = reactGenerator.reactPagesGenerator(pages);
  }
  // for api slice redux
  let newReduxApiSlice: IContent[] = [];
  if (apis) {
    newReduxApiSlice = reactGenerator.createReduxApiSlicesFile(apis);
  }
  // for hooks
  let filteredHook: IContent[] = [];
  if (hooks) {
    filteredHook = reactGenerator.selectedHook(hooks);
  }

  const allFilesAndFolderDemo: IContent[] = [
    ...pureReact,
    // ...newReduxApiSlice,
    // ...newPages,
    // ...filteredHook,
  ];

  const allFilesAndFolder: IContent[] = JSON.parse(
    JSON.stringify(allFilesAndFolderDemo)
  );

  // reactGenerator.addTailwindToReact(allFilesAndFolder);
  // adding others files Or folders
  if (othersFileFolder) {
    allFilesAndFolder.push(...othersFileFolder);
  }
  // add warper
  if (wrappers) {
    wrappers.forEach(ele => {
      reactGenerator.addWrapper(
        allFilesAndFolder,
        ele.importFrom,
        ele.wrapperNameFirst,
        ele.wrapperNameLast
      );
    });
  }

  // add firebaseAuth
  if (firebaseAuth?.auth) {
    reactGenerator.addFirebase(allFilesAndFolder, firebaseAuth, technology);
  }
  // reactGenerator.addMUiToReact(allFilesAndFolder);
  // change app.ts content for pages

  // const appFilePath = 'src\\App.tsx';
  // reactGenerator.changeExistingFileContent(
  //   appFilePath,
  //   reactGenerator.appFileContentGenerate(pages),
  //   allFilesAndFolder
  // );

  // create all folder and file
  reactGenerator.generateAllFolderAndFile(name, allFilesAndFolder, archive);

  // Finalize the ZIP archive and send it as a downloadable response
  // await archive.finalize();
  return archive;
};

export const reactFolderCreatorService = {
  createReactReduxFeatures,
  createReactReduxTemplate,
};
