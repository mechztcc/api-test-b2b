import { getManager } from 'typeorm';
import { University } from '../typeorm/entities/University';

export class DeleteAllUniversitiesService {
  public async execute(): Promise<any> {
    const manager = getManager();
    await manager.clear(University);
    return;
  }
}
