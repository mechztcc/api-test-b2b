import { getManager } from 'typeorm';
import { ObjectID } from 'mongodb';
import { University } from '../typeorm/entities/University';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

export class DeleteUniversityByIdService {
  public async execute({ id }: IRequest): Promise<any> {
    const manager = getManager();

    const universityExists = await manager.findOne(University, {
      _id: new ObjectID(id),
    });
    if (!universityExists) {
      throw new AppError('Resource not found', 404);
    }

    await manager.delete(University, { _id: new ObjectID(id) });
    return;
  }
}
