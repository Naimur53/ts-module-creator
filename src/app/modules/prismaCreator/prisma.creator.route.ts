import express from 'express';
import { prismaFolderCreator } from './prisma.folder.creator';
import { prismaFolderCreatorController } from './prisma.creator.controller';
import validateRequest from '../../middlewares/validateRequest';
import { mongooseFolderCreatorValidation } from '../mongooseFolderCreator/mongoose.folder.creator.validation';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  auth(),
  validateRequest(
    mongooseFolderCreatorValidation.mongooseFolderCreatorValidationSchema
  ),
  prismaFolderCreatorController.createPrismaModules
);
router.post(
  '/:name([a-zA-Z]+)',
  auth(),
  validateRequest(
    mongooseFolderCreatorValidation.mongooseFolderCreatorValidationSchema
  ),
  prismaFolderCreator.createFolder
);

export const createPrismaFolderRoute = router;
