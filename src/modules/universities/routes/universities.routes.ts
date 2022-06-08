import { Router } from 'express';
import { UniversityController } from '../http/controllers/UniversityController';

const universityController = new UniversityController();

const universityRouter = Router();

universityRouter.post('/populate-database', universityController.populateDataBase);

universityRouter.get('/:id', universityController.findById);
universityRouter.get('/', universityController.index);
universityRouter.delete('/:id', universityController.deleteById);
universityRouter.post('/', universityController.store);
universityRouter.put('/:id', universityController.update);




export default universityRouter;
