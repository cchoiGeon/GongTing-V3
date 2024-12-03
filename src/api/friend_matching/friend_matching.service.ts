import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendMatching } from 'src/db/entity/friendMatching.entity';
import { Repository } from 'typeorm';
import { CreateFriendMatchingDto } from './dto/friend_matching.dto';
import { Result } from 'src/db/entity/result.entitiy';

@Injectable()
export class FriendMatchingService {
    constructor(
        @InjectRepository(FriendMatching)
        private friendRepository: Repository<FriendMatching>,

        @InjectRepository(Result)
        private resultRepository: Repository<Result>,
    ) {}

    async createFriendMatching(createFriendMatchingDto: CreateFriendMatchingDto, uuid: string) {
        const { wishGender, wishAgeGroup, wishSmoke, wishFace, wishPersonal } = createFriendMatchingDto;
    
        try {
            // FriendMatching 엔티티 생성
            const friendMatching = await this.friendRepository.create({
                uuid,
                wishGender,
                wishAgeGroup,
                wishSmoke,
                wishFace,
                wishPersonal
            });
    
            return await this.friendRepository.save(friendMatching);
        } catch (error) {
            console.error('Error creating FriendMatching:', error);
            throw new InternalServerErrorException('Failed to create friend matching');
        }
    }
    
    async getFriendMatching( uuid: string ){
        try{
            const existData = await this.friendRepository.findOne({where:{uuid}});
            if(!existData){
                throw new NotFoundException();
            }

            return existData;
        }catch(error){
            console.error('Error getting FriendMatching:',error);
            if(error.status == 404){
                throw new NotFoundException('NOT EXIST DATA');
            }
            throw new InternalServerErrorException('Failed to get friend matching');
        }
    }

    async getFriendMatchingStatus( uuid:string ){
        try{
            const FRIEND = 0;
            
            const existData = await this.friendRepository.findOne({where:{uuid}});
            if(!existData){
                return 0
            }

            const existResultData = await this.resultRepository.findOne({where:{uuid,type:FRIEND}});
            if(!existResultData){
                return 1
            }

            return 2
        }catch(error){
            console.error('Error getting FriendMatching:',error);
            throw new InternalServerErrorException('Failed to get friend matching');
        }
    }
}
