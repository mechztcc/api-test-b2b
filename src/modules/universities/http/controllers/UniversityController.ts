import { FindUniversitiesService } from '@modules/universities/services/FindUnivesitiesService';
import { University } from '@modules/universities/typeorm/entities/University';
import { Request, Response } from 'express';

export class UniversityController {
  public async populateBank(req: Request, res: Response) {
    const universitiesService = new FindUniversitiesService();

    const universities = await universitiesService.execute();
    const universityModel = new University();

    for (let index = 0; index < universities.length; index++) {
      const element = universities[index];

      
    }
    return res.json(universities);
  }
}
