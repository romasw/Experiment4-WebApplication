import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLectureDto } from './create-lecture.dto';
import { Lecture, LectureDocument } from './lecture.schema';

@Injectable()
export class LecturesService {
  constructor(
    @InjectModel(Lecture.name) private lectureModel: Model<LectureDocument>,
  ) {}

  async create(createLectureDto: CreateLectureDto): Promise<Lecture> {
    const createdLecture = new this.lectureModel(createLectureDto);
    return createdLecture.save();
  }

  async getLectures(): Promise<Lecture[]> {
    return this.lectureModel.find().exec();
  }

  async getLecture(name: string): Promise<Lecture> {
    return this.lectureModel.findOne({ name: name }).exec();
  }

  async getLecturesInCharge(teacher: string): Promise<Lecture[]> {
    return this.lectureModel.find({ teacher: teacher }).exec();
  }

  async deleteLecture(name: string): Promise<Lecture> {
    return this.lectureModel.findOneAndDelete({ name: name });
  }
}
