import express from 'express';
import { createFolderRoute } from '../modules/mongooseFolderCreator/mongoose.folder.creator.route';
import { createPrismaFolderRoute } from '../modules/prismaCreator/prisma.creator.route';
import { FileToJsonCreatorRoute } from '../modules/fileToJsonCreator/file.json.creator.router';
import { createRectFolderRoute } from '../modules/reactFolderCreator/react.folder.creator.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/mongoose',
    route: createFolderRoute,
  },
  {
    path: '/prisma',
    route: createPrismaFolderRoute,
  },
  {
    path: '/react',
    route: createRectFolderRoute,
  },
  {
    path: '/create-json-file',
    route: FileToJsonCreatorRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
