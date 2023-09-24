import express from 'express';
import { folderCreator } from './mongoose.folder.creator';
import { mongooseFolderCreatorController } from './mongoose.folder.creator.controller';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  mongooseFolderCreatorController.createMongooseTemplate
);
router.get('/:name([a-zA-Z]+)', folderCreator.createFolder);

export const createFolderRoute = router;
