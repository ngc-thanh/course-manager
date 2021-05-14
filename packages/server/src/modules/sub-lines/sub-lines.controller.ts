import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubLinesService } from './sub-lines.service';
import { SubLineCreationDTO } from './dto/create-sub-line.dto';
import { SubLineUpdatingDTO } from './dto/update-sub-line.dto';

@Controller('sub-lines')
export class SubLinesController {
  constructor(private readonly subLinesService: SubLinesService) {}

  @Post()
  create(@Body() SubLineCreationDTO: SubLineCreationDTO) {
    return this.subLinesService.create(SubLineCreationDTO);
  }

  @Get()
  findAll() {
    return this.subLinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subLinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() SubLineUpdatingDTO: SubLineUpdatingDTO) {
    return this.subLinesService.update(+id, SubLineUpdatingDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subLinesService.remove(+id);
  }
}
