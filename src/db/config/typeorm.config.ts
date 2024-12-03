import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../entity/user.entity"
import * as config from 'config';
import { Auth } from "../entity/auth.entity";
import { FriendMatching } from "../entity/friendMatching.entity";
import { Result } from "../entity/result.entitiy";

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [User,Auth,FriendMatching,Result],
    synchronize: true,
}