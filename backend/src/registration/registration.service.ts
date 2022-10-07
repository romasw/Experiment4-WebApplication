import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegistrationDto } from './create-registration.dto';
import { Registration, RegistrationDocument } from './registration.schema';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name)
    private registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const createdRegistration = new this.registrationModel(
      createRegistrationDto,
    );
    return await createdRegistration.save();
  }

  async findAll(): Promise<Registration[]> {
    return await this.registrationModel.find().exec();
  }

  async getRegisteredLectures(student: string): Promise<Registration[]> {
    return await this.registrationModel.find({ student: student }).exec();
  }

  async getRegisteredgetStudents(lecture: string): Promise<Registration[]> {
    return await this.registrationModel.find({ lecture: lecture }).exec();
  }

  async deleteRegistration(registration: Registration): Promise<Registration> {
    return await this.registrationModel.findOneAndDelete(registration);
  }
}
