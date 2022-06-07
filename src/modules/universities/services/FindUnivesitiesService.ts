import axios from 'axios';

export class FindUniversitiesService {
  private url: string =
    'http://universities.hipolabs.com/search?country=argentina';

  public async execute(): Promise<any> {
    const universities: any = await axios.get(this.url);
    return universities.data;
  }
}
