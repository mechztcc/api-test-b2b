import { getManager } from 'typeorm';
import { ObjectID } from 'mongodb';
import { University } from '../typeorm/entities/University';

interface IRequest {
  id: string;
}

export class DeleteUniversityByIdService {
  public async execute({ id }: IRequest): Promise<any> {
    const manager = getManager();

    await manager.delete(University, { _id: new ObjectID(id) });
    return 
  }
}
