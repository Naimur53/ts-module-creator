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
function mapTypeToPrismaType(type: any) {
  // Add mappings for your data types to Prisma types as needed
  // You can expand this function to handle other data types
  switch (type) {
    case 'string':
      return 'String';
    case 'number':
      return 'Int';
    case 'boolean':
      return 'Boolean';
    default:
      return 'String'; // Default to String if type is not recognized
  }
}
const schemaGenerator = (modules: IModules[]): IContent => {
  let prismaSchema = `
  generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

  `;

  modules.forEach(module => {
    prismaSchema += `model ${module.name} {\n`;
    prismaSchema += `  id    String    @id @default(uuid()) @unique\n`;

    module.fields.forEach(field => {
      const fieldType = field.isRequired
        ? mapTypeToPrismaType(field.type)
        : `${mapTypeToPrismaType(field.type)}?`;
      prismaSchema += `  ${field.fieldName} ${fieldType}`;

      if (field.length) {
        prismaSchema += `@length(${field.length})`;
      }

      if (field.isUnique) {
        prismaSchema += '@unique';
      }

      prismaSchema += '\n';
    });

    prismaSchema += '}\n\n';
  });

  return {
    content: prismaSchema,
    fileName: 'schema.prisma',
    filePath: 'prisma\\schema.prisma',
  };
};
export const prismaGenerator = {
  modulesGenerator,
  schemaGenerator,
};
