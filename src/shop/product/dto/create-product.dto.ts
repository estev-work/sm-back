import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

  @ApiProperty({example:'This is product name',description:'Product name'})
  readonly name:string;

  @ApiProperty({example:'This is short description',description:'Short description product'})
  readonly shortDescription:string;

  @ApiProperty({example:'This is description',description:'Description product'})
  readonly description:string;

  @ApiProperty({example:'1000',description:'Price'})
  readonly price:number;
}
