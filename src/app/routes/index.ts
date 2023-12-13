import { createNextJsFolderRoute } from './../modules/nextJsFolderCreator/nextJsFolderCreator.route';
import express from 'express';
import { createFolderRoute } from '../modules/mongooseFolderCreator/mongoose.folder.creator.route';
import { createPrismaFolderRoute } from '../modules/prismaCreator/prisma.creator.route';
import { createRectFolderRoute } from '../modules/reactFolderCreator/react.folder.creator.route';
import { UserRoutes } from '../modules/user/user.router';
import { CreationRoutes } from '../modules/creation/creation.router';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
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
    path: '/next',
    route: createNextJsFolderRoute,
  },
  {
    path: '/creation',
    route: CreationRoutes,
  },
  // {
  //   path: '/create-json-file',
  //   route: FileToJsonCreatorRoute,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
