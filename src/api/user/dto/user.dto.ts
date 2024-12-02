import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsNumber()
  studentId: number;

  @IsNumber()
  age: number;

  @IsNumber()
  height: number;

  @IsIn([0, 1, 2, 3, 4, 5])
  face: number; // 0: 강아지상, 1: 고양이상, 2: 토끼상, 3: 여우상, 4: 곰상, 5: 햄스터상

  @IsIn([0, 1]) // 0: ..., 1: ...
  personal: number;

  @IsIn([0, 1, 2]) // 0: 흡연, 1: 비흡연, 2: 금연
  isSmoke: number;

  @IsString()
  @IsOptional() // Optional 처리 가능
  kakaoId: string;
}
