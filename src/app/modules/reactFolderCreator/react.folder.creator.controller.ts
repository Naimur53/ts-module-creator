import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { reactFolderCreatorService } from './react.folder.creator.service';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import { IReactReduxTemplateRequestBody } from './react.folder.creator.interface';

const createReactReduxTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const {
      apis = ['demo'],
      pages = ['home'],
      hooks = ['useCustomHook'],
      firebaseAuth,
      technology,
      cssFrameWork,
      npmPackages,
    }: IReactReduxTemplateRequestBody = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...apis, ...pages, ...hooks]);
    const archive = await reactFolderCreatorService.createReactReduxTemplate({
      apis,
      hooks,
      firebaseAuth,
      name,
      pages,
      technology,
      cssFrameWork,
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
  createReactReduxTemplate,
};
