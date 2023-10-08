import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import { nextJsFolderCreatorService } from './nextJsFolderCreator.service';
import { IReactTemplateRequestBody } from '../reactFolderCreator/react.folder.creator.interface';
import { CreationService } from '../creation/creation.service';
import { ILanguage, ITechnology } from '../../../interfaces/common';

const createNextJsTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { shouldComment = false } = req.query;
    const {
      apis,
      pages = ['home'],
      hooks = ['useCustomHook'],
      firebaseAuth,
      technology,
      npmPackages,
      wrappers,
      othersFileFolder,
    }: IReactTemplateRequestBody = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with apis pages and hooks
    modulesStringChecker([...pages, ...hooks]);
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.NextJsReduxTemplate,
    });
    const archive = await nextJsFolderCreatorService.createNextTemplate({
      apis,
      hooks,
      firebaseAuth,
      name,
      pages,
      technology,
      npmPackages,
      wrappers,
      othersFileFolder,
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
export const nextJsFolderCreatorController = {
  createNextJsTemplate,
};
