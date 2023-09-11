import express from 'express';
import { folderCreator } from './mongoose.folder.creator';
const router = express.Router();

router.post('/tem/:name([a-zA-Z]+)', folderCreator.createMongooseTemplate);
router.get('/:name([a-zA-Z]+)', folderCreator.createFolder);

export const createFolderRoute = router;
