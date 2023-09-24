import express from 'express';
import { mongooseFolderCreatorController } from './mongoose.folder.creator.controller';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  mongooseFolderCreatorController.createMongooseTemplate
);
router.post(
  '/:name([a-zA-Z]+)',
  mongooseFolderCreatorController.createMongooseModules
);

export const createFolderRoute = router;
