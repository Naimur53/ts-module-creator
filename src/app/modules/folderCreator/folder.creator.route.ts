import express from 'express';
import { folderCreator } from './folderCreator';
const router = express.Router();

router.get('/:name([a-zA-Z]+)', folderCreator.createFolder);

export const createFolderRoute = router;
