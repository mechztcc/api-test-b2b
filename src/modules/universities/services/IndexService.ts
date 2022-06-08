import { getManager } from 'typeorm';
import { University } from '../typeorm/entities/University';

export class IndexService {
  public async execute(): Promise<University[]> {
    const manager = getManager();

    const universities: University[] = await manager.find(University);

    return universities;
  }
}
