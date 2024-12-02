import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.dto';
import { SuccessResponseDTO } from 'src/common/response/response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    async signup(
        @Body() authCredentialsDto: AuthCredentialsDto
    ) {
        return new SuccessResponseDTO (await this.authService.signup(authCredentialsDto));
    }
    
    @Post('/signin')
    async signIn(
        @Body() authCredentialsDto: AuthCredentialsDto
    ) {
        return new SuccessResponseDTO(await this.authService.signIn(authCredentialsDto));
    }
    
    @Post('/verification')
    @UseGuards(AuthGuard())
    async saveUserStudentCard(
        @Req() req
    ){
        return new SuccessResponseDTO(await this.authService.saveUserStudentCard(req.user));
    }

    @Get('/verification')
    @UseGuards(AuthGuard())
    async getUserVerfication(
        @Req() req
    ){
        return new SuccessResponseDTO(await this.authService.getUserVerification(req.user));
    }
}
