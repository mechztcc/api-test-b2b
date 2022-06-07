import { FindUniversitiesService } from '@modules/universities/services/FindUnivesitiesService';
import { Request, Response } from 'express';

export class UniversityController {
  public async populateBank(req: Request, res: Response) {
    const universitiesService = new FindUniversitiesService();

    const universities = await universitiesService.execute();
    return res.json(universities);
  }
}
