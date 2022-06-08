import { getManager } from 'typeorm';
import { ObjectID } from 'mongodb';
import { University } from '../typeorm/entities/University';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

export class FindUniversityByIdService {
  public async execute({ id }: IRequest): Promise<University> {
    const manager = getManager();

    const university: University = await manager.findOne(University, {
      _id: new ObjectID(id),
    });

    if (!university) {
      throw new AppError('Resource not found', 404);
    }

    return university;
  }
}
