import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Role } from "../../roles/roles.model";
import { CreateProductDto } from "./dto/create-product.dto";
import { User } from "../../users/users.model";
import { Roles } from "../../auth/roles-auth.decorator";
import { RolesGuard } from "../../auth/roles.guard";
import { Product } from "./product.model";

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @ApiOperation({summary:'Create role'})
    @ApiResponse({status:200,type:Role})
    @Post()
    create(@Body() productDto: CreateProductDto){
        this.productService.createProduct(productDto);
    }

    @ApiOperation({ summary: "Get all products" })
    @ApiResponse({ status: 200, type: [Product] })
    @Get()
    getAll() {
        return this.productService.getAllProducts();
    }

    @ApiOperation({ summary: "Get product by id" })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/:id')
    getById(@Param('id') id:number) {
        return this.productService.getProductById(id);
    }
}
