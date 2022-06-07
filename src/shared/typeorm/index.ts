import { University } from '@modules/universities/typeorm/entities/University';
import { createConnection } from 'typeorm';

createConnection().then(async (connection) => {
  const university = new University();
  university.alpha_two_code = 'teste';
  university.country = 'teste';
  university.domains = ['teste', 'teste'];
  university.state_province = null;
  university.web_pages = ['teste', 'teste'];
  university.name = 'barramas';

  await connection.manager.save(university);
});
