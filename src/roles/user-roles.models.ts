import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "./roles.model";
import { User } from "../users/users.model";

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

  @ApiProperty({ example: "1", description: "Unique identificator" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "2", description: "Unique identificator role" })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ApiProperty({ example: "12", description: "Unique identificator user" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
