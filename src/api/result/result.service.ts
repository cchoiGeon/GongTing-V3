import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from 'src/db/entity/result.entitiy';
import { Repository } from 'typeorm';

@Injectable()
export class ResultService {
    constructor(
        @InjectRepository(Result)
        private resultRepository: Repository<Result>
    ){}
    async getUserFriendMatchingResult( uuid:string ){
        const FRIEND = 0
        return await this.resultRepository.findOne({where:{uuid,type:FRIEND}});
    }
}
