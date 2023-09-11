import archiver from 'archiver';
import { Request, RequestHandler, Response } from 'express';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import fileName from '../../../helpers/fileName';
import prismaAllFileContents from '../../../data/prismaAllFileContents';
import catchAsync from '../../../shared/catchAsync';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IContent } from '../../../interfaces/common';
import indexRouterContentController from '../../../helpers/indexRouterContentCreator';
import prismaTemplates from '../../../data/prismaTemplates';

const createFolder = async (req: Request, res: Response): Promise<any> => {
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

  prismaAllFileContents.forEach(ele => {
    archive.append(
      singleFileCreatorHelper(ele.content, name, Boolean(shouldComment)),
      {
        name: `${name}/${lowerCaseName}.${ele.fileName}.ts`,
      }
    );
  });

  // Finalize the ZIP archive and send it as a downloadable response
  await archive.finalize();
  // res.send('success');
};
const createPrismaTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const { modules = ['demo'] }: { modules: string[] } = req.body;
    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);
    const foundWrongString = modules.find(str => {
      return str === '' || str[0].match(/\d/) || str[0].match(/[A-Z]/);
    });

    if (foundWrongString || foundWrongString === '') {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'wrong type modules name detected'
      );
    }

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
      prismaAllFileContents.forEach(single => {
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

    const allFilesAndFolder = [...prismaTemplates, ...newModules];
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

export const prismaFolderCreator = { createFolder, createPrismaTemplate };
