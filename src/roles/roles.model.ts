import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  name: string,
  email: string,
  password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example:'1',description:'Unique identificator'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example:'Ivan',description:'Name'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({example:'users@mail.com',description:'Email addres'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example:'***',description:'Password'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example:'+7(999)-123-45-67',description:'Telephone number'})
  @Column({ type: DataType.STRING, allowNull: true })
  tel: string;

  @ApiProperty({example:'true',description:'is banned or not'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({example:'Inappropriate chat behavior ',description:'Banned reason description'})
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  banReason: string;
}
