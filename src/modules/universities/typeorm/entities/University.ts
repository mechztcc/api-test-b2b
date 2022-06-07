import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class University {
  @ObjectIdColumn()
  _id: ObjectID;

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

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  /**
   *
   */
  constructor(
    alpha_two_code?: string,
    domains?: string[],
    country?: string,
    state_province?: string,
    web_pages?: string[],
    name?: string
  ) {
    this.alpha_two_code = alpha_two_code;
    this.domains = domains;
    this.country = country;
    this.state_province = state_province;
    this.web_pages = web_pages;
    this.name = name;
  }
}
