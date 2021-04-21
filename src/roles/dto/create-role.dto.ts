import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{

  @ApiProperty({example:'Admin',description:'Role name'})
  readonly value:string;

  @ApiProperty({example:'Project creator',description:'Description role'})
  readonly description:string;
}
