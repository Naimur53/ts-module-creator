import express from 'express';
import { prismaFolderCreator } from './prisma.folder.creator';
const router = express.Router();

router.post('/tem/:name([a-zA-Z]+)', prismaFolderCreator.createPrismaTemplate);
router.get('/:name([a-zA-Z]+)', prismaFolderCreator.createFolder);

export const createPrismaFolderRoute = router;
