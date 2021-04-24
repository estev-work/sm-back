import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./product.model";
import { Category } from "../category/category.model";

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [
        SequelizeModule.forFeature([Product, Category])
    ],
    exports: [ProductService]
})
export class ProductModule {
}
