import archiver from 'archiver';
import { Request, Response } from 'express';
import mongooseAllFileContents from '../../../helpers/mongooseAllFileContents';
import singleFileCreatorHelper from '../../../helpers/singleFileCreatorHelper';
import fileName from '../../../helpers/fileName';

const createFolder = async (req: Request, res: Response): Promise<any> => {
  // Create a unique folder name based on a timestamp

  const { name } = req.params;
  const { lowerCaseName } = fileName(name);

  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  // Set headers to trigger the download
  res.setHeader('Content-Disposition', `attachment; filename="${name}.zip"`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Pipe the archive to the response
  archive.pipe(res);

  mongooseAllFileContents.forEach(ele => {
    archive.append(singleFileCreatorHelper(ele.content, name, false), {
      name: `${name}/${lowerCaseName}.${ele.fileName}.ts`,
    });
  });

  // Finalize the ZIP archive and send it as a downloadable response
  await archive.finalize();
  // res.send('success');
};

export const prismaFolderCreator = { createFolder };
