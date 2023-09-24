import archiver, { Archiver } from 'archiver';
import { IContent } from '../../../interfaces/common';
import indexRouterContentController from '../../../helpers/indexRouterContentCreator';
import { IMongooseTemplateBodyRequest } from './mongoose.folder.creator.interface';
import mongooseTemplates from '../../../data/mongooseTemplatesContent';
import { mongooseGenerator } from './mongoose.folder.creator.utils';

const createMongooseModules = async ({
  modules,
}: IMongooseTemplateBodyRequest): Promise<Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  const allFilesAndFolder: IContent[] = [];

  mongooseGenerator.createModules(allFilesAndFolder, modules, true);

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
const createMongooseTemplate = async ({
  modules,
}: IMongooseTemplateBodyRequest): Promise<Archiver> => {
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  const allFilesAndFolder: IContent[] = JSON.parse(
    JSON.stringify(mongooseTemplates)
  );

  mongooseGenerator.createModules(allFilesAndFolder, modules);
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
export const mongooseFolderCreatorService = {
  createMongooseTemplate,
  createMongooseModules,
};
