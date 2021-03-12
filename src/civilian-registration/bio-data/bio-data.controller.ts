import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) {}

  @Get('create')
  @Render('Citizens/create-citizen.html')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createForm() {}

  
  /**@Get('list')
  @Render('Citizens/list.html')
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHome(): {} {
    return this.bioDataService.getList();
  }*/

  @Post()
  create(@Body() createBioDatumDto: CreateBioDatumDto) {
    return this.bioDataService.create(createBioDatumDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioDataService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBioDatumDto: UpdateBioDatumDto,
  ) {
    return this.bioDataService.update(+id, updateBioDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioDataService.remove(+id);
  }
}
