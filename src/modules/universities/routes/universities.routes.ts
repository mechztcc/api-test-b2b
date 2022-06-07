import { Router } from 'express';
import { UniversityController } from '../http/controllers/UniversityController';

const universityController = new UniversityController();

const universityRouter = Router();

universityRouter.post('/', universityController.populateDataBase);

export default universityRouter;
