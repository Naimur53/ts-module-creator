"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseGenerator = void 0;
const mongooseAllFileContents_1 = require("../../../data/mongooseAllFileContents");
const fileName_1 = __importDefault(require("../../../helpers/fileName"));
const singleFileCreatorHelper_1 = __importDefault(require("../../../helpers/singleFileCreatorHelper"));
function generateMongooseSchema(modelInfo, schemaContent) {
    const schemaFields = modelInfo.map(info => {
        const { upperCaseName } = (0, fileName_1.default)(info.type);
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
function generateTypeScriptInterface(modelInfo, interfaceContent) {
    const typeFields = modelInfo.map(info => {
        return `${info.fieldName}: ${info.type};`;
    });
    const interfacePattern = /\/\/ RegexPlaceholder/;
    const replacedContent = interfaceContent.replace(interfacePattern, typeFields.join('\n  '));
    return replacedContent;
}
function generateZodSchema(modelInfo, content) {
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
function generateConstantFile(content, searchFields, filterFields) {
    const searchContent = JSON.stringify(searchFields || []);
    const filterContent = JSON.stringify(filterFields || []);
    // Remove the first [ and last ] characters from the JSON strings
    const updatedSearchContent = searchContent.substring(1, searchContent.length - 1);
    const updatedFilterContent = filterContent.substring(1, filterContent.length - 1);
    const updatedContent = content
        .replace(/\/\/add searchable fields/, updatedSearchContent)
        .replace(/\/\/add filter able fields/, updatedFilterContent);
    return updatedContent;
}
const createModules = (allFileAndFolder, modules, modulesOnly) => {
    modules.forEach(singleModule => {
        const { lowerCaseName } = (0, fileName_1.default)(singleModule.name);
        mongooseAllFileContents_1.mongooseAllFileContent
            .getAllFileContentOfSingleModels(singleModule.shouldAddPaginationAndQuery)
            .forEach(singleFile => {
            var _a;
            // create file path
            const filePath = `${modulesOnly ? '' : 'src\\app\\modules\\'}${singleModule.name}\\${lowerCaseName}.${singleFile.fileName}.ts`;
            // single module file content change with demo name
            const singleModuleFile = {
                content: (0, singleFileCreatorHelper_1.default)(singleFile.content, lowerCaseName, false),
                fileName: singleFile.fileName,
                filePath,
            };
            // create file content based on files name
            if ((_a = singleModule.fields) === null || _a === void 0 ? void 0 : _a.length) {
                if (singleFile.fileName === 'model') {
                    singleModuleFile.content = generateMongooseSchema(singleModule.fields, singleModuleFile.content);
                }
                else if (singleFile.fileName === 'interface') {
                    singleModuleFile.content = generateTypeScriptInterface(singleModule.fields, singleModuleFile.content);
                }
                else if (singleFile.fileName === 'validation') {
                    singleModuleFile.content = generateZodSchema(singleModule.fields, singleModuleFile.content);
                }
                else if (singleFile.fileName === 'constant') {
                    singleModuleFile.content = generateConstantFile(singleModuleFile.content, singleModule.searchTermFields, singleModule.exactMatchFields);
                }
            }
            allFileAndFolder.push(singleModuleFile);
        });
    });
};
exports.mongooseGenerator = {
    createModules,
};
