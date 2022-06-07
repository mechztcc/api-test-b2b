import AppError from '@shared/errors/AppError';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json('Im Alive !');
});

export default routes;
