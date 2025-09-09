import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateSiswaDto } from './dto/create-siswa.dto';


@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Post()
  create(@Body() createSiswaDto: CreateSiswaDto) {
    return this.siswaService.create(createSiswaDto);
  }

  @Get()
  findAll() {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string) {
    return this.siswaService.findOne(nisn);
  }

  @Patch(':nisn')
  update(@Param('nisn') nisn: string, @Body() updateSiswaDto: CreateSiswaDto) {
    return this.siswaService.update(nisn, updateSiswaDto);
  }

  @Delete(':nisn')
  remove(@Param('nisn') nisn: string) {
    return this.siswaService.remove(nisn);
  }
}
