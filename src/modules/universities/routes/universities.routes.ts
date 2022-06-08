import { Router } from 'express';
import { UniversityController } from '../http/controllers/UniversityController';

const universityController = new UniversityController();

const universityRouter = Router();

universityRouter.post('/populate-database', universityController.populateDataBase);
universityRouter.get('/:id', universityController.findById);
universityRouter.get('/', universityController.index);

export default universityRouter;
