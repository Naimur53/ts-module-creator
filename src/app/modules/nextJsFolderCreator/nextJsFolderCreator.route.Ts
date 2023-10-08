import { nextJsFolderCreatorController } from './nextJsFolderCreator.controller';
import { reactFolderCreatorZodValidation } from '../reactFolderCreator/react.folder.creator.validation';
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  auth(),
  validateRequest(
    reactFolderCreatorZodValidation.reactFolderCreatorTemplateSchema
  ),
  nextJsFolderCreatorController.createNextJsTemplate
);
// router.get(
//   '/:name([a-zA-Z]+)',
//   reactFolderCreatorService.createReactReduxFeatures
// );

export const createNextJsFolderRoute = router;
