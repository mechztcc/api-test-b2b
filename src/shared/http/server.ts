import 'reflect-metadata';
import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message });
  }

  return res
    .status(500)
    .json({ status: 500, message: 'Internal server error!' });
});

app.listen(3333, () => {
  console.log('Server running at localhost:3333! ');
});
