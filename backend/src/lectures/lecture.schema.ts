import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LectureDocument = Lecture & Document;

@Schema()
export class Lecture {
  @Prop()
  name: string;

  @Prop()
  credit : number;

  @Prop()
  teacher: string;

  @Prop()
  day : number;

  @Prop()
  period : number;

  @Prop()
  major: string;

  @Prop()
  year : number;
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);