import express from 'express';
import { folderRoute } from './folderCreator';
const router = express.Router();

router.get('/', folderRoute);

export const createFolderRoute = router;
