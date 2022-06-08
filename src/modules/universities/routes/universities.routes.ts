import { Router } from 'express';
import { UniversityController } from '../http/controllers/UniversityController';

const universityController = new UniversityController();

const universityRouter = Router();

universityRouter.post('/populate-database', universityController.populateDataBase);
universityRouter.get('/:id', universityController.findById);

export default universityRouter;
