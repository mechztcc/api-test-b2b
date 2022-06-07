import axios from 'axios';

export class FindUniversitiesService {
  private url: string =
    'http://universities.hipolabs.com/search?country=';

  public async execute(country: string): Promise<any> {
    
    const universities: any = await axios.get(`${this.url}${country}`);
    console.log(`${this.url}${country}`);
    
    return universities.data;
  }
}
