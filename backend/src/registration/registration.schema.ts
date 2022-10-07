import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
  @Prop()
  student: string;

  @Prop()
  lecture : string;
  
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);