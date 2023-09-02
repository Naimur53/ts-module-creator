import express from 'express';
import { createFolderRoute } from '../modules/folderCreator/folder.creator.route';
import { createPrismaFolderRoute } from '../modules/prismaCreator/prisma.creator.route';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
