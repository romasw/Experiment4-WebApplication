import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegistrationDto } from './create-registration.dto';
import { Registration } from './registration.schema';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Post()
  async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    this.registrationService.create(createRegistrationDto);
  }

  @Get()
  async findAll(): Promise<Registration[]> {
    return this.registrationService.findAll();
  }

  @Get('student/:student')
  async getRegisteredLectures(
    @Param('student') student: string,
  ): Promise<Registration[]> {
    return this.registrationService.getRegisteredLectures(student);
  }

  @Get('lecture/:lecture')
  async getRegisteredStudents(
    @Param('lecture') lecture: string,
  ): Promise<Registration[]> {
    return this.registrationService.getRegisteredStudents(lecture);
  }

  @Delete()
  async deleteLecture(
    @Body() registaration: Registration,
  ): Promise<Registration> {
    return this.registrationService.deleteRegistration(registaration);
  }
}
