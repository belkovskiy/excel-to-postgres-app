import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello.controller';
import { LiftController } from './lift.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, LiftController],
  providers: [AppService],
})
export class AppModule {}
