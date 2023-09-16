import express from 'express';
import { reactFolderCreatorService } from './react.folder.creator.service';
import { reactFolderCreatorController } from './react.folder.creator.controller';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  reactFolderCreatorController.createReactReduxTemplate
);
router.get(
  '/:name([a-zA-Z]+)',
  reactFolderCreatorService.createReactReduxFeatures
);

export const createRectFolderRoute = router;
