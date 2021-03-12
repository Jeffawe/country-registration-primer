import { BioData } from 'src/civilian-registration/bio-data/entities/bio-datum.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class LinkedIdentity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  NIN: number;

  @Column({ nullable: true })
  BVN: number;

  @Column({ nullable: true })
  mobileNumbers: number;

  @JoinColumn()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => BioData, (biodata) => biodata.linkedIdentity, {
    cascade: true,
  })
  biodata: BioData;
}
