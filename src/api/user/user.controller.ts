import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserProfileDto } from './dto/user.dto';
import { UserService } from './user.service';
import { SuccessResponseDTO } from 'src/common/response/response.dto';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
    constructor(private userService:UserService){}

    @Post('/profile')
    async createUserProfile(
        @Body() createUserProfileDto:CreateUserProfileDto,
        @Req() req,
    ){  
        await this.userService.createUserProfile(createUserProfileDto,req.user);
        return new SuccessResponseDTO;
    }

    @Get('/profile/status')
    async getUserProfileStatus(
        @Req() req,
    ){
        return new SuccessResponseDTO(this.userService.getUserProfileStatus(req.user));
    }
}
