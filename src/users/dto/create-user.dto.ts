import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:'Ivan',description:'Name'})
  readonly name:string;

  @ApiProperty({example:'user@mail.com',description:'Email addres'})
  readonly email:string;

  @ApiProperty({example:'***',description:'Password'})
  readonly password:string;
}
