import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../roles/roles.model";
import { UserRoles } from "../../roles/user-roles.models";
import { Product } from "../product/product.model";
import { ProductCategories } from "../product/product-categories.models";

interface CategoryCreationAttrs {
    name: string,
    description: string
}

@Table({ tableName: "categories" })
export class Category extends Model<Category, CategoryCreationAttrs> {

    @ApiProperty({example:'1',description:'Unique identificator for product'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'This is category name',description:'Name category'})
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({example:'this-is-category-slug',description:'SEO'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    slug: string;

    @ApiProperty({example:'this is description for category',description:'Description'})
    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @BelongsToMany(()=>Product,()=>ProductCategories)
    roles: Product[];
}
