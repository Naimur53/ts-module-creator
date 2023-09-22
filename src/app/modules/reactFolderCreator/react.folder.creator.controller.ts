import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { reactFolderCreatorService } from './react.folder.creator.service';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import { IReactTemplateRequestBody } from './react.folder.creator.interface';

const createReduxFile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const { apis = ['demo'], technology }: IReactTemplateRequestBody = req.body;

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
      apis = ['demo'],
      pages = ['home'],
      hooks = ['useCustomHook'],
      firebaseAuth,
      technology,
      npmPackages,
    }: IReactTemplateRequestBody = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...apis, ...pages, ...hooks]);
    const archive = await reactFolderCreatorService.createReactTemplate({
      apis,
      hooks,
      firebaseAuth,
      name,
      pages,
      technology,
      npmPackages,
      shouldComment: Boolean(shouldComment),
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
