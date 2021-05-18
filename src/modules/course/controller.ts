import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CourseCreationDTO } from './dto/create-course.dto';
import { CourseUpdationDTO } from './dto/update-course.dto';
import { Course } from './model';
import { CourseService } from './service';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly logger: Logger,
    private readonly courseService: CourseService,
  ) {}

  @Get()
  findAll(): Promise<Course[]> {
    try {
      return this.courseService.findAll();
    } catch (error) {
      this.logger.error(error);
    }
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Course> {
    try {
      return this.courseService.findById(id);
    } catch (error) {
      this.logger.error(error);
    }
  }

  @Post()
  createAndSave(@Body() courseDTO: CourseCreationDTO): Promise<Course> {
    try {
      return this.courseService.createAndSave(courseDTO);
    } catch (error) {
      this.logger.error(error);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() courseDTO: CourseUpdationDTO,
  ): Promise<Course> {
    try {
      return this.courseService.update(id, courseDTO);
    } catch (error) {
      this.logger.error(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}