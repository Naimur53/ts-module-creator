import express from 'express';
import { reactFolderCreatorController } from './react.folder.creator.controller';
import validateRequest from '../../middlewares/validateRequest';
import { reactFolderCreatorZodValidation } from './react.folder.creator.validation';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  validateRequest(
    reactFolderCreatorZodValidation.reactFolderCreatorTemplateSchema
  ),
  reactFolderCreatorController.createReactTemplate
);
router.post(
  '/redux/:name([a-zA-Z]+)',
  reactFolderCreatorController.createReduxFile
);

export const createRectFolderRoute = router;
