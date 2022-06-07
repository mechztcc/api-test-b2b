import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity()
export class University {

  @ObjectIdColumn()
  id: ObjectID

  @Column()
  alpha_two_code: string;

  @Column()
  domains: string[];

  @Column()
  country: string;

  @Column()
  state_province: string;

  @Column()
  web_pages: string[];

  @Column()
  name: string;
}
