import express from 'express';
import { createFolderRoute } from '../modules/folderCreator/folder.creator.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/create-folder',
    route: createFolderRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
