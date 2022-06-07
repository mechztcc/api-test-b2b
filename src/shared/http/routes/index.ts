import { UniversityController } from '@modules/universities/http/controllers/UniversityController';
import universityRouter from '@modules/universities/routes/universities.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json('Im Alive !');
});

routes.use('/populate-bank', universityRouter);

export default routes;
