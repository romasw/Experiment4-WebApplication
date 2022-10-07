import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRegistrationDto } from './create-registration.dto';
import { Registration } from './registration.interface';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    this.registrationService.create(createRegistrationDto);
  }

  @Get()
  findAll(): Registration[] {
    return this.registrationService.findAll();
  }
}
