import { Module } from '@nestjs/common';
import { FriendMatchingController } from './friend_matching.controller';
import { FriendMatchingService } from './friend_matching.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendMatching } from 'src/db/entity/friendMatching.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([FriendMatching]),AuthModule],
  controllers: [FriendMatchingController],
  providers: [FriendMatchingService]
})
export class FriendMatchingModule {}
