import { ILanguage, ITechnology } from './../../../interfaces/common';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import modulesStringChecker from '../../../helpers/modulesStringChecker';
import { mongooseFolderCreatorService } from './mongoose.folder.creator.service';
import { IMongooseTemplateRequest } from './mongoose.folder.creator.interface';
import { CreationService } from '../creation/creation.service';

const createMongooseModules: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { modules }: IMongooseTemplateRequest = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with modules name
    modulesStringChecker(modules.map(single => single.name));

    const archive = await mongooseFolderCreatorService.createMongooseModules({
      name,
      modules,
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.MongooseModule,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);
const createMongooseTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { modules }: IMongooseTemplateRequest = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with modules name
    modulesStringChecker(modules.map(single => single.name));

    const archive = await mongooseFolderCreatorService.createMongooseTemplate({
      name,
      modules,
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.MongooseTemplate,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);
export const mongooseFolderCreatorController = {
  createMongooseTemplate,
  createMongooseModules,
};
