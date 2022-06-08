import { FindUniversityByIdService } from '@modules/universities/services/FindUniversitiesByIdService';
import { FindUniversitiesService } from '@modules/universities/services/FindUnivesitiesService';
import { University } from '@modules/universities/typeorm/entities/University';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { IndexService } from '@modules/universities/services/IndexService';

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

        const uni = new University(
          element['alpha_two_code'],
          element['domains'],
          element['country'],
          element['state-province'],
          element['web_pages'],
          element['name']
        );

        await manager.save(uni);
      }
    }

    return res.status(201).json();
  }

  public async findById(req: Request, res: Response) {
    const findUniversityByIdService = new FindUniversityByIdService();
    const { id } = req.params;

    const university = await findUniversityByIdService.execute({ id: id });
    return res.status(200).send({ university });
  }

  public async index(req: Request, res: Response) {
    const indexService = new IndexService();

    const universities = await indexService.execute();

    return res.status(200).send({ universities });
  }
}
