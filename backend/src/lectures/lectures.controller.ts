import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLectureDto } from './create-lecture.dto';
import { Lecture } from './lecture.schema';
import { LecturesService } from './lectures.service';

@Controller('lectures')
export class LecturesController {
  constructor(private lecturesService: LecturesService) {}

  @Post()
  async create(@Body() createLectureDto: CreateLectureDto) {
    this.lecturesService.create(createLectureDto);
  }

  @Get()
  async getLectures(): Promise<Lecture[]> {
    return this.lecturesService.getLectures();
  }

  @Get('lecture/:name')
  async getLecture(
    @Param("name") name: string,
  ): Promise<Lecture>{
    return this.lecturesService.getLecture(name);
  }
  
  @Get('teacher/:teacher')
  async getLecturesInCharge(
    @Param("teacher") teacher: string,
  ): Promise<Lecture[]>{
    return this.lecturesService.getLecturesInCharge(teacher);
  }
}
