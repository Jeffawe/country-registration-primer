import { CreateBioDatumDto } from 'src/civilian-registration/bio-data/dto/create-bio-datum.dto';

export class CreateLinkedIdentityDto {
  readonly NIN: number;
  readonly BVN: number;
  readonly mobilenumbers: number;
  readonly biodata: CreateBioDatumDto;
}
