import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
  @ApiProperty({example:'users@mail.com',description:'Email addres'})
  @IsString({ message:'only string.'})
  @IsEmail({},{ message: 'this not email'})
  readonly email:string;

  @ApiProperty({example:'***',description:'Password'})
  @IsString({ message:'only string.'})
  @Length(6, 25, {message: 'no less than 8 and no more than 25 characters'})
  readonly password:string;
}
