import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserProfileDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async saveUser(user:User){
        return await this.userRepository.save(user);
    }
    async createUser(userId:string, password: string){
        return await this.userRepository.create({ userId, password });
    }

    async findUserByUUID(uuid:string){
        return await this.userRepository.findOne({where:{uuid}});
    }

    async findUserByUserId(userId:string){
        return await this.userRepository.findOne({where:{userId}});
    }

    async findUserByNickName(nickname:string){
        return await this.userRepository.findOne({where:{nickname}});
    }

    async findUserByStudentId(studentId:number){
        return await this.userRepository.findOne({where:{studentId}});
    }

    async createUserProfile(createUserProfileDto:CreateUserProfileDto,uuid:string){
        const { nickname, studentId } = createUserProfileDto;
        
        const existNickName = await this.findUserByNickName(nickname);
        if(existNickName){

        }

        const existStudentId = await this.findUserByStudentId(studentId);
        if(existStudentId){

        }
        await this.userRepository.update({ uuid }, createUserProfileDto);
    }

    async getUserProfileStatus( uuid: string ){
        const user = await this.userRepository.findOne({where:{uuid}});
        if(!user.nickname){
            return 0;
        }
        return 1;
    }
}
