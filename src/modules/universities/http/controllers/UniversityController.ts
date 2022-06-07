import { FindUniversitiesService } from '@modules/universities/services/FindUnivesitiesService';
import { University } from '@modules/universities/typeorm/entities/University';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export class UniversityController {
  public async populateDataBase(req: Request, res: Response) {
    const findUniversitiesService = new FindUniversitiesService();
    const manager = getManager();

    const { countries } = req.body;

    for (let index = 0; index < countries.length; index++) {
      const country = countries[index];

      const university = await findUniversitiesService.execute(country);

      for (let index = 0; index < university.length; index++) {
        const element = university[index];

        const uni = new University();
        uni.alpha_two_code = element['alpha_two_code'];
        uni.country = element['country'];
        uni.domains = element['domains'];
        uni.state_province = element['state_province'];
        uni.web_pages = element['web_pages'];
        uni.name = element['name'];

        await manager.save(uni);
      }
    }

    return res.status(201).json();
  }
}
