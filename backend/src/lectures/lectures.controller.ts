import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLectureDto } from './create-lecture.dto';
import { Lecture } from './lecture.interface';
import { LecturesService } from './lectures.service';

@Controller('lectures')
export class LecturesController {
  constructor(private lecturesService: LecturesService) {}

  @Post()
  create(@Body() createLectureDto: CreateLectureDto) {
    this.lecturesService.create(createLectureDto);
  }

  @Get()
  findAll(): Lecture[] {
    return this.lecturesService.findAll();
  }
}
