import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class BioData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  nationality: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  countryOfBirth: string;

  @Column({ default: true })
  stateOfBirth: boolean;

  @Column()
  townOfBirth: string;

  @Column()
  residentialaddress: string;

  @Column()
  profession: string;
}
