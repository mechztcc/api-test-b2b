import { University } from '../typeorm/entities/University';
import { getManager } from 'typeorm';
import { ObjectID } from 'mongodb';
import AppError from '@shared/errors/AppError';

interface IRequest {
  web_pages: string[];
  name: string;
  domains: string[];
  _id: string;
}

export class UpdateUniversityService {
  public async execute({
    domains,
    name,
    web_pages,
    _id,
  }: IRequest): Promise<any> {
    const manager = getManager();

    const universityExists: University = await manager.findOne(University, {
      _id: new ObjectID(_id),
    });

    if (!universityExists) {
      throw new AppError('Resource not found', 404);
    }

    const university = await manager.update(
      University,
      { _id: new ObjectID(_id) },
      { domains, name, web_pages }
    );

    return university;
  }
}
