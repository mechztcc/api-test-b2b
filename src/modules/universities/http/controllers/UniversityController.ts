import { FindUniversityByIdService } from '@modules/universities/services/FindUniversitiesByIdService';
import { FindUniversitiesService } from '@modules/universities/services/FindUnivesitiesService';
import { University } from '@modules/universities/typeorm/entities/University';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { IndexService } from '@modules/universities/services/IndexService';
import { DeleteUniversityByIdService } from '@modules/universities/services/DeleteUniversityByIdService';
import { StoreUniversityService } from '@modules/universities/services/StoreUniversityService';
import { UpdateUniversityService } from '@modules/universities/services/UpdateUniversityService';
import AppError from '@shared/errors/AppError';
import { DeleteAllUniversitiesService } from '@modules/universities/services/DeleteAllUniversitiesService';

export class UniversityController {
  public async populateDataBase(req: Request, res: Response) {
    const findUniversitiesService = new FindUniversitiesService();
    const manager = getManager();

    const countries = req.body.countries ?? [
      'argentina',
      'brasil',
      'chile',
      'colombia',
      'paraguai',
      'peru',
      'suriname',
      'uruguay',
    ];

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

  public async deleteById(req: Request, res: Response) {
    const deleteUniversityByIdService = new DeleteUniversityByIdService();
    const { id } = req.params;

    await deleteUniversityByIdService.execute({ id: id });
    return res.status(204).send();
  }

  public async store(req: Request, res: Response) {
    const storeUniversityService = new StoreUniversityService();

    const {
      alpha_two_code,
      country,
      domains,
      name,
      state_province,
      web_pages,
    } = req.body;

    const university = await storeUniversityService.execute({
      alpha_two_code,
      country,
      domains,
      name,
      state_province,
      web_pages,
    });

    if (university.error) {
      throw new AppError('there is already a university with this data', 409);
    }

    return res.status(201).send({ university });
  }

  public async update(req: Request, res: Response) {
    const updateUniversityService = new UpdateUniversityService();
    const { domains, name, web_pages } = req.body;
    const { id } = req.params;

    const university = await updateUniversityService.execute({
      domains,
      name,
      web_pages,
      _id: id,
    });

    return res.status(204).send();
  }

}
