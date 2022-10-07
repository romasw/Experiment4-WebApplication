import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lecture } from './lecture.schema';
import { LectureSchema } from './lecture.schema';
import { LecturesController } from './lectures.controller';
import { LecturesService } from './lectures.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/lectures'), MongooseModule.forFeature([{ name: Lecture.name, schema: LectureSchema }])],
  controllers: [LecturesController],
  providers: [LecturesService],
})
export class LecturesModule {}
