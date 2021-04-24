import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

  @ApiProperty({example:'This is category name',description:'Product name'})
  readonly name:string;

  @ApiProperty({example:'This is description',description:'Description product'})
  readonly description:string;
}
