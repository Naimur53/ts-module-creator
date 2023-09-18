import fs from 'fs';
import path from 'path';
import { IContent } from '../../../interfaces/common';

const fileToJsonCreator = async (): Promise<IContent[]> => {
  function readDirectoryRecursively(rootDir: string) {
    const filesArray: IContent[] = [];

    function readDirectory(dir: string, currentPath: string) {
      // Read the contents of the directory
      const files = fs.readdirSync(dir);

      // Iterate through the files and subdirectories
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Recursively read subdirectories
          readDirectory(filePath, path.join(currentPath, file));
        } else {
          // Read file content
          const content = fs.readFileSync(filePath, 'utf8');

          // Create an object with file information
          const fileInfo = {
            fileName: file,
            filePath: path.join(currentPath, file), // Adjust the file path
            content: content,
          };

          // Add the file information object to the array
          filesArray.push(fileInfo);
        }
      }
    }

    readDirectory(rootDir, ''); // Start with an empty currentPath
    return filesArray;
  }

  const rootPath = 'src/templates/pure-react'; // Root path
  const fileObjectsArray = readDirectoryRecursively(rootPath);
  return fileObjectsArray;
};

export const fileToJsonCreatorService = {
  fileToJsonCreator,
};
