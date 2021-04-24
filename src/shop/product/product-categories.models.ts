import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../category/category.model";
import { Product } from "./product.model";

@Table({ tableName: "product_categories", createdAt: false, updatedAt: false })
export class ProductCategories extends Model<ProductCategories> {

    @ApiProperty({ example: "1", description: "Unique identificator" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "2", description: "Unique identificator category" })
    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER })
    categoryId: number;

    @ApiProperty({ example: "12", description: "Unique identificator product" })
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER })
    productId: number;
}
