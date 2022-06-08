import { getManager } from 'typeorm';
import { University } from '../typeorm/entities/University';

interface IRequest {
  alpha_two_code: string;
  domains: string[];
  country: string;
  state_province: string;
  web_pages: string[];
  name: string;
}

export class StoreUniversityService {
  public async execute({
    alpha_two_code,
    country,
    domains,
    name,
    state_province,
    web_pages,
  }: IRequest): Promise<any> {
    const manager = getManager();

    const university = new University(
      alpha_two_code,
      domains,
      country,
      state_province,
      web_pages,
      name
    );

    const data = await manager.save(university);
    return data;
  }
}
