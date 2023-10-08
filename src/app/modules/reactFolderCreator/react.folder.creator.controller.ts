import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { reactFolderCreatorService } from './react.folder.creator.service';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import { IReactTemplateRequestBody } from './react.folder.creator.interface';
import { CreationService } from '../creation/creation.service';
import { ILanguage, ITechnology } from '../../../interfaces/common';

const createReduxFile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const { apis = [], technology }: IReactTemplateRequestBody = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...apis]);
    const archive = await reactFolderCreatorService.createReactReduxFeatures({
      apis,
      name,
      technology,
      shouldComment: Boolean(shouldComment),
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.ReactReduxApi,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);

const createReactTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const {
      apis,
      pages = ['home'],
      hooks = ['useCustomHook'],
      firebaseAuth,
      technology,
      npmPackages,
      othersFileFolder,
      wrappers,
    }: IReactTemplateRequestBody = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...pages, ...hooks]);
    const archive = await reactFolderCreatorService.createReactTemplate({
      apis,
      hooks,
      firebaseAuth,
      name,
      pages,
      technology,
      npmPackages,
      othersFileFolder,
      wrappers,
      shouldComment: Boolean(shouldComment),
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: apis?.length
        ? ITechnology.ReactReduxApi
        : ITechnology.ReactTemplate,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);

export const reactFolderCreatorController = {
  createReactTemplate,
  createReduxFile,
};
