import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFriendMatchingDto } from './dto/friend_matching.dto';
import { FriendMatchingService } from './friend_matching.service';
import { SuccessResponseDTO } from 'src/common/response/response.dto';

@Controller('friend-matching')
@UseGuards(AuthGuard())
export class FriendMatchingController {
    constructor(
        private friendMatchingService:FriendMatchingService
    ){}

    @Post('/')
    async saveFriendMatching(
        @Body() createFriendMatchingDto: CreateFriendMatchingDto,
        @Req() req,
    ){
        return new SuccessResponseDTO(await this.friendMatchingService.createFriendMatching(createFriendMatchingDto,req.user));
    }

    @Get('/')
    async getFriendMatching(
        @Req() req,
    ){
        return new SuccessResponseDTO(await this.friendMatchingService.getFriendMatching(req.user));
    }

    @Get('/status')
    async getFriendMatchingStatus(
        @Req() req,
    ){
        return new SuccessResponseDTO(await this.friendMatchingService.getFriendMatchingStatus(req.user));  
    }
}
