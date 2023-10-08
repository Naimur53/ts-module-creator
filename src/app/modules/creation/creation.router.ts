import express from 'express';
import { CreationController } from './creation.controller';
const router = express.Router();

router.get('/', CreationController.getAllCreation);
router.get('/:id', CreationController.getSingleCreation);

router.post('/', CreationController.addCreation);

router.patch('/:id', CreationController.updateCreation);
router.delete('/:id', CreationController.deleteCreation);

export const CreationRoutes = router;
