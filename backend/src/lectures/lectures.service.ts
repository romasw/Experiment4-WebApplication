import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './create-lecture.dto';
import { Lecture } from './lecture.interface';

@Injectable()
export class LecturesService {
  private readonly lectures: Lecture[] = [];

  create(createLectureDto: CreateLectureDto) {
    this.lectures.push(createLectureDto);
  }

  findAll(): Lecture[] {
    return this.lectures;
  }
}
