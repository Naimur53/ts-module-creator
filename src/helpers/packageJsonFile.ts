import httpStatus from 'http-status';
import ApiError from '../errors/ApiError';
import { IContent, IPackage } from '../interfaces/common';

const getPackageJsonFile = (allFileAndFolder: IContent[]): string => {
  const packageFile = allFileAndFolder.find(
    single => single.filePath === 'package.json'
  );
  if (!packageFile?.content) {
    throw new ApiError(httpStatus.BAD_REQUEST, `can't find package.json file`);
  }
  return packageFile?.content;
};
const changePackageJsonFile = (
  allFileAndFolder: IContent[],
  newPackage: string
): void => {
  const packageFileIndex = allFileAndFolder.findIndex(
    single => single.filePath === 'package.json'
  );
  allFileAndFolder[packageFileIndex].content = newPackage;
};

import { IAdditionalDependencies } from '../interfaces/common';

const addDependencies = (
  jsonString: string,
  additionalDependencies: IAdditionalDependencies[],
  toDevDependencies: boolean | undefined = false
): string => {
  try {
    // Parse the JSON string into an object
    const config = JSON.parse(jsonString);

    // Check if the "dependencies" property exists
    if (!config.dependencies) {
      config.dependencies = {};
    }
    if (!config.devDependencies) {
      config.devDependencies = {};
    }

    const createObj: Record<string, string> = {};

    additionalDependencies.forEach(single => {
      createObj[single.name] = single.version;
    });
    // Add the additional dependencies to the "dependencies" property
    if (toDevDependencies) {
      Object.assign(config.devDependencies, createObj);
    } else {
      Object.assign(config.dependencies, createObj);
    }

    // Convert the modified object back to a JSON string
    const updatedJsonString = JSON.stringify(config);

    return updatedJsonString;
  } catch (error) {
    console.error('Error parsing or updating JSON:', error);
    throw new ApiError(httpStatus.BAD_REQUEST, `can't parse package.json`); // Return the original string if there's an error
  }
};
const addDependenciesToProject = (
  allFilesAndFolder: IContent[],
  packages: IPackage[],
  toDevDependencies: boolean | undefined
): void => {
  const packageFile = getPackageJsonFile(allFilesAndFolder);

  // add dependencies
  const newPackageFile = addDependencies(
    packageFile,
    packages,
    toDevDependencies
  );
  // now add new package file
  changePackageJsonFile(allFilesAndFolder, newPackageFile);
};
export const packageJsonFile = {
  getPackageJsonFile,
  changePackageJsonFile,
  addDependencies,
  addDependenciesToProject,
};
