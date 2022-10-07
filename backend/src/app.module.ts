import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LecturesModule } from './lectures/lectures.module';
import { RegistrationModule } from './registration/registaration.module';

@Module({
  imports: [LecturesModule, RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
