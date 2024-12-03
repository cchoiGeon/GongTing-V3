import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SuccessResponseDTO } from 'src/common/response/response.dto';
import { ResultService } from './result.service';

@Controller('result')
@UseGuards(AuthGuard())
export class ResultController {

    constructor(
        private resultService:ResultService
    ){}

    @Get('/friend')
    async getUserFriendMatchingResult(
        @Req() req,
    ){
        return new SuccessResponseDTO(await this.resultService.getUserFriendMatchingResult(req.user));
    }
}
