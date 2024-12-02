import { IsNumber, IsIn } from 'class-validator';

export class CreateFriendMatchingDto {
    @IsNumber()
    @IsIn([0, 1])
    wishGender: number;

    @IsNumber()
    @IsIn([0, 1, 2])
    wishAgeGroup: number;

    @IsNumber()
    @IsIn([0, 1, 2])
    wishSmoke: number;

    @IsNumber()
    @IsIn([0, 1, 2, 3, 4, 5])
    wishFace: number;

    @IsNumber()
    @IsIn([0, 1])
    wishPersonal: number;
}
  
