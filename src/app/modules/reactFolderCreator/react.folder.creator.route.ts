import express from 'express';
import { reactFolderCreatorController } from './react.folder.creator.controller';
import validateRequest from '../../middlewares/validateRequest';
import { reactFolderCreatorZodValidation } from './react.folder.creator.validation';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  auth(),
  validateRequest(
    reactFolderCreatorZodValidation.reactFolderCreatorTemplateSchema
  ),
  reactFolderCreatorController.createReactTemplate
);
router.post(
  '/redux/:name([a-zA-Z]+)',
  auth(),
  reactFolderCreatorController.createReduxFile
);

export const createRectFolderRoute = router;
