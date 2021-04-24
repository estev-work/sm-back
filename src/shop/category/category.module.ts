import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { Product } from "../product/product.model";

@Module({
    controllers: [CategoryController],
    providers: [CategoryService],
    imports: [
        SequelizeModule.forFeature([Category, Product])
    ],
    exports: [CategoryService]
})
export class CategoryModule {
}
