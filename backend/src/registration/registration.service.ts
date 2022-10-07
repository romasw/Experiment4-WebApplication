import { Injectable } from "@nestjs/common";
import { CreateRegistrationDto } from "./create-registration.dto";
import { Registration } from "./registration.interface";

@Injectable()
export class RegistrationService {
    private readonly registration: Registration[] = []
    
    create(createRegistrationDto: CreateRegistrationDto) {
        return this.registration.push(createRegistrationDto)
    }

    findAll(): Registration[] {
        return this.registration;
    }
}
