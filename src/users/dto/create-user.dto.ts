import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:'users@mail.com',description:'Email addres'})
  readonly email:string;

  @ApiProperty({example:'***',description:'Password'})
  readonly password:string;
}
