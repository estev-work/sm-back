import {Module} from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.models";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from "./posts/posts.module";
import { Post } from "./posts/posts.model";
import { CategoryModule } from "./shop/category/category.module";
import { Category } from "./shop/category/category.model";
import { ProductModule } from "./shop/product/product.module";
import { ProductCategories } from "./shop/product/product-categories.models";
import { Product } from "./shop/product/product.model";

@Module({
    controllers:[],
    providers:[],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Product, Category, ProductCategories],
            logging: false,
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        ProductModule,
        CategoryModule
    ]
})
export class AppModule{

}
