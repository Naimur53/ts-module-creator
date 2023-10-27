import { mongooseAllFileContent } from '../../../data/mongooseAllFileContents';
import fileName from '../../../helpers/fileName';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import { IContent } from '../../../interfaces/common';
import { IFields, IModules } from './mongoose.folder.creator.interface';

function generateMongooseSchema(modelInfo: IFields[], schemaContent: string) {
  const schemaFields = modelInfo.map(info => {
    const { upperCaseName } = fileName(info.type);
    let fieldDefinition = `{ type: ${upperCaseName}`;
    if (info.length) {
      fieldDefinition += `, maxlength: ${info.length}`;
    }
    if (info.isRequired) {
      fieldDefinition += ', required: true';
    }
    if (info.isUnique) {
      fieldDefinition += ', unique: true';
    }
    fieldDefinition += ' },';

    return `${info.fieldName}: ${fieldDefinition}`;
  });

  const regex = /\/\/ RegexPlaceholder/;
  const formattedSchemaFields = schemaFields.join('\n  ');
  const updatedContent = schemaContent.replace(regex, formattedSchemaFields);

  return updatedContent;
}

function generateTypeScriptInterface(
  modelInfo: IFields[],
  interfaceContent: string
) {
  const typeFields = modelInfo.map(info => {
    return `${info.fieldName}: ${info.type};`;
  });

  const interfacePattern = /\/\/ RegexPlaceholder/;
  const replacedContent = interfaceContent.replace(
    interfacePattern,
    typeFields.join('\n  ')
  );

  return replacedContent;
}

function generateZodSchema(modelInfo: IFields[], content: string) {
  // for create
  const fieldValidationsForCreate = modelInfo.map(info => {
    const fieldValidation = `z.${info.type}({required_error:"${info.fieldName} is required"})`;

    return `${info.fieldName}: ${fieldValidation}`;
  });
  //   for update
  const fieldValidationsForUpdate = modelInfo.map(info => {
    const fieldValidation = `z.${info.type}({required_error:"${info.fieldName} is required"}).optional()`;

    return `${info.fieldName}: ${fieldValidation}`;
  });
  //   join
  const createValidationContent = `${fieldValidationsForCreate.join(',\n')}`;
  const updateValidationContent = `${fieldValidationsForUpdate.join(',\n')}`;

  // added regex to change the content
  const updatedContent = content
    .replace(/\/\/add create validation/, createValidationContent)
    .replace(/\/\/add update validation/, updateValidationContent);
  return updatedContent;
}
function generateConstantFile(
  content: string,
  searchFields?: string[],
  filterFields?: string[]
): string {
  const searchContent = JSON.stringify(searchFields || []);
  const filterContent = JSON.stringify(filterFields || []);
  // Remove the first [ and last ] characters from the JSON strings
  const updatedSearchContent = searchContent.substring(
    1,
    searchContent.length - 1
  );
  const updatedFilterContent = filterContent.substring(
    1,
    filterContent.length - 1
  );

  const updatedContent = content
    .replace(/\/\/add searchable fields/, updatedSearchContent)
    .replace(/\/\/add filter able fields/, updatedFilterContent);
  return updatedContent;
}
const createModules = (
  allFileAndFolder: IContent[],
  modules: IModules[],
  modulesOnly?: boolean
): void => {
  modules.forEach(singleModule => {
    const { lowerCaseName } = fileName(singleModule.name);

    mongooseAllFileContent
      .getAllFileContentOfSingleModels(singleModule.shouldAddPaginationAndQuery)
      .forEach(singleFile => {
        // create file path
        const filePath = `${modulesOnly ? '' : 'src\\app\\modules\\'}${
          singleModule.name
        }\\${lowerCaseName}.${singleFile.fileName}.ts`;
        // single module file content change with demo name
        const singleModuleFile = {
          content: singleFileCreatorHelper(
            singleFile.content,
            lowerCaseName,
            false
          ),
          fileName: singleFile.fileName,
          filePath,
        };

        // create file content based on files name

        if (singleModule.fields?.length) {
          if (singleFile.fileName === 'model') {
            singleModuleFile.content = generateMongooseSchema(
              singleModule.fields,
              singleModuleFile.content
            );
          } else if (singleFile.fileName === 'interface') {
            singleModuleFile.content = generateTypeScriptInterface(
              singleModule.fields,
              singleModuleFile.content
            );
          } else if (singleFile.fileName === 'validation') {
            singleModuleFile.content = generateZodSchema(
              singleModule.fields,
              singleModuleFile.content
            );
          } else if (singleFile.fileName === 'constant') {
            singleModuleFile.content = generateConstantFile(
              singleModuleFile.content,
              singleModule.searchTermFields,
              singleModule.exactMatchFields
            );
          }
        }
        allFileAndFolder.push(singleModuleFile);
      });
  });
};
export const mongooseGenerator = {
  createModules,
};
