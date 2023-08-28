import express from 'express';
import { prismaFolderCreator } from './prisma.folder.creator';
const router = express.Router();

router.get('/prisma/:name([a-zA-Z]+)', prismaFolderCreator.createFolder);

export const createFolderRoute = router;
