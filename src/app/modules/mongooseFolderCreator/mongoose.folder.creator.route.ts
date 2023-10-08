import express from 'express';
import { mongooseFolderCreatorController } from './mongoose.folder.creator.controller';
import validateRequest from '../../middlewares/validateRequest';
import { mongooseFolderCreatorValidation } from './mongoose.folder.creator.validation';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  auth(),
  validateRequest(
    mongooseFolderCreatorValidation.mongooseFolderCreatorValidationSchema
  ),
  mongooseFolderCreatorController.createMongooseTemplate
);
router.post(
  '/:name([a-zA-Z]+)',
  auth(),
  mongooseFolderCreatorController.createMongooseModules
);

export const createFolderRoute = router;
