import { getManager } from 'typeorm';
import { ObjectID } from 'mongodb';
import { University } from '../typeorm/entities/University';

interface IRequest {
  id: string;
}

export class FindUniversitiesByIdService {
  public async execute({ id }: IRequest): Promise<University> {
    const manager = getManager();

    const university: University = await manager.findOneOrFail(University, {
      _id: new ObjectID(id),
    });

    return university;
  }
}
