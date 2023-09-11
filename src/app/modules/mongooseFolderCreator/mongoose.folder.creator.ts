import archiver from 'archiver';
import { Request, RequestHandler, Response } from 'express';
import mongooseAllFileContents from '../../../data/mongooseAllFileContents';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import fileName from '../../../helpers/fileName';
import catchAsync from '../../../shared/catchAsync';
import mongooseTemplates from '../../../data/mongooseTemplatesContent';
import indexRouterContentController from '../../../helpers/indexRouterContentCreator';
import { IContent } from '../../../interfaces/common';
import modulesStringChecker from '../../../helpers/modulesStringChecker';

const createFolder = catchAsync(async (req: Request, res: Response) => {
  const { shouldComment = false } = req.query;
  const { name } = req.params;
  const { lowerCaseName } = fileName(name);

  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  // Set headers to trigger the download
  res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Pipe the archive to the response
  archive.pipe(res);

  mongooseAllFileContents.forEach(ele => {
    archive.append(
      singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
      {
        name: `${name}/${lowerCaseName}.${ele.fileName}.ts`,
      }
    );
  });

  // Finalize the ZIP archive and send it as a downloadable response
  await archive.finalize();
});

const createMongooseTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const { modules = ['demo'] }: { modules: string[] } = req.body;
    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    // throw a error if found random type string
    modulesStringChecker(modules);

    const archive = archiver('zip', {
      zlib: { level: 9 }, // Set compression level
    });

    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    let newModules: IContent[] = [];

    modules.forEach(element => {
      const { lowerCaseName } = fileName(element);
      mongooseAllFileContents.forEach(single => {
        const singleModules = {
          content: singleFileCreatorHelper(
            single.content,
            lowerCaseName,
            Boolean(shouldComment)
          ),
          fileName: single.fileName,
          filePath: `src\\app\\modules\\${element}\\${lowerCaseName}.${single.fileName}.ts`,
        };
        newModules = [...newModules, singleModules];
      });
    });

    const allFilesAndFolder = [...mongooseTemplates, ...newModules];
    // change content for routes/index.ts
    const routesIndexTsFilePath = 'src\\app\\routes\\index.ts';

    const routesIndexTsFileIndex = allFilesAndFolder.findIndex(
      single => single.filePath === routesIndexTsFilePath
    );

    allFilesAndFolder[routesIndexTsFileIndex].content =
      indexRouterContentController(modules);

    // create all folder and file
    allFilesAndFolder.forEach(ele => {
      archive.append(
        // singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
        ele.content,

        {
          name: ele.filePath + '',
        }
      );
    });

    // Finalize the ZIP archive and send it as a downloadable response
    await archive.finalize();
  }
);

export const folderCreator = { createFolder, createMongooseTemplate };

/* 


*/
