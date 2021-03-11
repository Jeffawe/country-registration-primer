import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CivilianRegistrationModule } from './civilian-registration/civilian-registration.module';
import { BioDataModule } from './civilian-registration/bio-data/bio-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), CivilianRegistrationModule, BioDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
