import archiver, { Archiver } from 'archiver';
import { IMongooseTemplateBodyRequest } from '../mongooseFolderCreator/mongoose.folder.creator.interface';
import indexRouterContentController from '../../../helpers/indexRouterContentCreator';
import { prismaGenerator } from './prisma.creator.utils';
import prismaTemplates from '../../../data/prismaTemplates';
import { IContent } from '../../../interfaces/common';

const createPrismaTemplate = async ({
  modules,
}: IMongooseTemplateBodyRequest): Promise<Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  const newModules = prismaGenerator.modulesGenerator(modules);
  const prismaSchemaFile = prismaGenerator.schemaGenerator(modules);
  const allFilesAndFolder = [
    ...prismaTemplates,
    prismaSchemaFile,
    ...newModules,
  ];
  // change content for routes/index.ts
  const routesIndexTsFilePath = 'src\\app\\routes\\index.ts';

  const routesIndexTsFileIndex = allFilesAndFolder.findIndex(
    single => single.filePath === routesIndexTsFilePath
  );

  allFilesAndFolder[routesIndexTsFileIndex].content =
    indexRouterContentController(modules.map(single => single.name));

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
  return archive;
};

const createPrismaModules = async ({
  modules,
}: IMongooseTemplateBodyRequest): Promise<Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  const allFilesAndFolder: IContent[] = prismaGenerator.modulesGenerator(
    modules,
    true
  );

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

  return archive;
};

export const prismaFolderCreatorService = {
  createPrismaTemplate,
  createPrismaModules,
};
