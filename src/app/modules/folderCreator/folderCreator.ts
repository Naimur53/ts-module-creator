import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import express from 'express';
import createRouterFile from '../../../helpers/CreateRouterFile';
import createModelFile from '../../../helpers/CreateModelFile';
import createInterfaceFile from '../../../helpers/CreateInterfaceFile';
import createControllerFile from '../../../helpers/CreateControllerFile';
import createServiceFile from '../../../helpers/CreateServiceFile';
import createConstant from '../../../helpers/CreateConstantFile';
const router = express.Router();

router.get('/', async (req, res) => {
  // Create a unique folder name based on a timestamp

  const { name } = req.query;
  console.log(name);
  if (typeof name !== 'string' || !name.trim() || !isNaN(parseFloat(name))) {
    res.status(400).send('Name not found!');
    return;
  }
  const folderName = `${name}`;
  const folderPath = path.join(__dirname, 'downloads', folderName);

  // Ensure the folder exists
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(folderPath);

  // Create the demo.ts file with content
  const routerFilePath = path.join(folderPath, `${name}.router.ts`);
  createRouterFile(routerFilePath, name);

  const modelFilePath = path.join(folderPath, `${name}.model.ts`);
  createModelFile(modelFilePath, name);

  const interFaceFilePath = path.join(folderPath, `${name}.interface.ts`);
  createInterfaceFile(interFaceFilePath, name);

  const controllerFilePath = path.join(folderPath, `${name}.controller.ts`);
  createControllerFile(controllerFilePath, name);

  const serviceFilePath = path.join(folderPath, `${name}.service.ts`);
  createServiceFile(serviceFilePath, name);
  const constantFilePath = path.join(folderPath, `${name}.constant.ts`);
  createConstant(constantFilePath, name);

  // Create a ZIP archive
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Set compression level
  });

  // Set headers to trigger the download
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${folderName}.zip"`
  );
  res.setHeader('Content-Type', 'application/octet-stream');

  // Pipe the archive to the response
  archive.pipe(res);

  // Append the dynamically generated folder to the ZIP archive
  archive.directory(folderPath, folderName);

  // Finalize the ZIP archive and send it as a downloadable response
  await archive.finalize();

  // Optionally, you can remove the generated folder after sending the ZIP
  await fs.rmdirSync(folderPath, { recursive: true });

  res.send('dfd');
});

export const folderRoute = router;
