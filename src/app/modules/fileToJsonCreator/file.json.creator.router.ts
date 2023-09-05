import express from 'express';
import { fileToJsonCreatorController } from './file.json.creator.controller';
const router = express.Router();

router.get('/', fileToJsonCreatorController.fileToJsonCreator);

export const FileToJsonCreatorRoute = router;
