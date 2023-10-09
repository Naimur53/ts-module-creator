import { ILanguage, ITechnology } from './../../../interfaces/common';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import modulesStringChecker from '../../../helpers/modulesStringChecker';

import { CreationService } from '../creation/creation.service';
import { IMongooseTemplateRequest } from '../mongooseFolderCreator/mongoose.folder.creator.interface';
import { prismaFolderCreatorService } from './prisma.creator.service';

const createPrismaModules: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { modules }: IMongooseTemplateRequest = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with modules name
    modulesStringChecker(modules.map(single => single.name));

    const archive = await prismaFolderCreatorService.createPrismaTemplate({
      name,
      modules,
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.PostgresModule,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);
const createPrismaTemplate: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { modules }: IMongooseTemplateRequest = req.body;

    const { name } = req.params;
    // const { lowerCaseName } = fileName(name);

    //throw error if something is wrong with modules name
    modulesStringChecker(modules.map(single => single.name));

    const archive = await prismaFolderCreatorService.createPrismaTemplate({
      name,
      modules,
    });
    await CreationService.addCreation({
      createdBy: req.user?._id,
      language: ILanguage.Typescript,
      technology: ITechnology.PostgresTemplate,
    });
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    // Pipe the archive to the response

    archive.pipe(res);
    await archive.finalize();
  }
);
export const prismaFolderCreatorController = {
  createPrismaTemplate,
  createPrismaModules,
};
