import { LinkedIdentity } from 'src/civilian-registration/linked-identity/entities/linked-identity.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class BioData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column({ nullable: true })
  lastNamez: string;

  @Column({ nullable: true })
  nationality: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  countryOfBirth: string;

  @Column({ nullable: true })
  stateOfBirth: boolean;

  @Column({ nullable: true })
  townOfBirth: string;

  @Column({ nullable: true })
  residentialaddress: string;

  @Column({ nullable: true })
  profession: string;

  @Column({ default: true })
  isActive: boolean;

  @JoinColumn()
  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (type) => LinkedIdentity,
    (linkedIdentity) => linkedIdentity.biodata,
  )
  linkedIdentity: LinkedIdentity;
}
