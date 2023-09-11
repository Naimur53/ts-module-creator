import express from 'express';
import { reactFolderCreator } from './react.folder.creator';
const router = express.Router();

router.post(
  '/tem/:name([a-zA-Z]+)',
  reactFolderCreator.createReactReduxTemplate
);
router.get('/:name([a-zA-Z]+)', reactFolderCreator.createReactReduxFeatures);

export const createRectFolderRoute = router;
