import archiver from 'archiver';
import { Request, RequestHandler, Response } from 'express';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import fileName from '../../../helpers/fileName';
import catchAsync from '../../../shared/catchAsync';
import { IContent } from '../../../interfaces/common';
import reduxTsApiFileContent from '../../../data/reduxTsApiFileContent';
import reactReduxTemplates from '../../../data/reactReduxTemplates';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import reactPageContent from '../../../data/reactPageContent';
import reactTsHooks from '../../../data/reactTsHooks';
import { createReactAppFileContent } from './react.folder.creator.utils';

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
const createReactReduxTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const {
      apis = ['demo'],
      pages = ['home'],
      hooks = ['useCustomHook'],
    }: { apis: string[]; pages: string[]; hooks: string[] } = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...apis, ...pages, ...hooks]);

    const archive = archiver('zip', {
      zlib: { level: 9 }, // Set compression level
    });

    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);

    // for creating pages
    let newPages: IContent[] = [];
    pages.forEach(singlePage => {
      const { lowerCaseName, upperCaseName } = fileName(singlePage);
      const singlePageInfo: IContent = {
        content: singleFileCreatorHelper(
          reactPageContent,
          lowerCaseName,
          Boolean(shouldComment)
        ),
        fileName: singlePage,
        filePath: `src\\Pages\\${upperCaseName}\\${upperCaseName}.tsx`,
      };

      newPages = [...newPages, singlePageInfo];
    });

    // for api slice redux
    let newReduxApiSlice: IContent[] = [];

    apis.forEach(singleName => {
      const { lowerCaseName } = fileName(singleName);

      const singleModules = {
        content: singleFileCreatorHelper(
          reduxTsApiFileContent,
          lowerCaseName,
          Boolean(shouldComment)
        ),
        fileName: singleName,
        filePath: `src\\redux\\features\\${singleName}\\${singleName}Api.ts`,
      };
      newReduxApiSlice = [...newReduxApiSlice, singleModules];
    });
    // for hooks
    const filteredHook = reactTsHooks.filter(singleReactHook => {
      return hooks.find(singleExpectedHook =>
        singleReactHook.fileName.includes(singleExpectedHook)
      );
    });

    const allFilesAndFolder: IContent[] = [
      ...reactReduxTemplates,
      ...newReduxApiSlice,
      ...newPages,
      ...filteredHook,
    ];

    // change app.ts content for pages
    const appFilePath = 'src\\App.tsx';
    const appPageIndex = allFilesAndFolder.findIndex(
      single => single.filePath === appFilePath
    );
    allFilesAndFolder[appPageIndex].content = createReactAppFileContent(pages);

    // create all folder and file
    allFilesAndFolder.forEach(ele => {
      archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),

        {
          name: ele.filePath + '',
        }
      );
    });

    // Finalize the ZIP archive and send it as a downloadable response
    await archive.finalize();
  }
);

export const reactFolderCreator = {
  createReactReduxFeatures,
  createReactReduxTemplate,
};
