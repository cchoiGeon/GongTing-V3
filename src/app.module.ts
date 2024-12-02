import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './db/config/typeorm.config';
import { UserModule } from './api/user/user.module';
import { FriendMatchingModule } from './api/friend_matching/friend_matching.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig),AuthModule, UserModule, FriendMatchingModule],
})
export class AppModule {}
