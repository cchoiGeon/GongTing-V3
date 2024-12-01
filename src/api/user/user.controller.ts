import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
    @Get('/')
    async test(
        @Req() req
    ){
        return req.user;
    }
}
