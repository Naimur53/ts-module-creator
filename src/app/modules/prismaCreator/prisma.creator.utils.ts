import prismaAllFileContents from '../../../data/prismaAllFileContents';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent } from '../../../interfaces/common';
import { IModules } from '../mongooseFolderCreator/mongoose.folder.creator.interface';

const modulesGenerator = (
  modules: IModules[],
  modulesOnly?: boolean
): IContent[] => {
  let newModules: IContent[] = [];

  modules.forEach(element => {
    const { lowerCaseName } = fileName(element.name);
    prismaAllFileContents.forEach(single => {
      const filePath = `${
        modulesOnly ? '' : 'src\\app\\modules\\'
      }${lowerCaseName}\\${lowerCaseName}.${single.fileName}.ts`;
      console.log(filePath);
      const singleModules = {
        content: singleFileCreatorHelper(single.content, lowerCaseName, false),
        fileName: single.fileName,
        filePath,
      };
      newModules = [...newModules, singleModules];
    });
  });
  return newModules;
};
export const prismaGenerator = {
  modulesGenerator,
};
