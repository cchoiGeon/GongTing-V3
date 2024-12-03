import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from 'src/db/entity/result.entitiy';

@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([Result])],
  controllers: [ResultController],
  providers: [ResultService]
})
export class ResultModule {}
