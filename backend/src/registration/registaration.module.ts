import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegistrationController } from "./registration.controller";
import { Registration, RegistrationSchema } from "./registration.schema";
import { RegistrationService } from "./registration.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/registration'), MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }])],
    controllers: [RegistrationController],
    providers: [RegistrationService],
})

export class RegistrationModule {}