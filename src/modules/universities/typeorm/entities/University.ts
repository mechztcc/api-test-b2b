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
}
