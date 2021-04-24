import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../roles/roles.model";
import { UserRoles } from "../../roles/user-roles.models";
import { using } from "rxjs";
import { ProductCategories } from "./product-categories.models";
import { Category } from "../category/category.model";

interface ProductCreationAttrs {
    name: string,
    shortDescription: string,
    description: string,
    price: number
}

@Table({ tableName: "products" })
export class Product extends Model<Product, ProductCreationAttrs> {

    @ApiProperty({example:'1',description:'Unique identificator for product'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'This is product name',description:'Name product'})
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({example:'this-is-product-slug',description:'SEO'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    slug: string;

    @ApiProperty({example:'this is short description for product',description:'Short description'})
    @Column({ type: DataType.STRING, allowNull: true })
    shortDescription: string;

    @ApiProperty({example:'this is description for product',description:'Description'})
    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @ApiProperty({example:'100',description:'Product price'})
    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    price: number;

    @BelongsToMany(()=>Category,()=>ProductCategories)
    roles: Category[];
}
