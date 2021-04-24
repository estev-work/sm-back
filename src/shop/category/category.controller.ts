import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Role } from "../../roles/roles.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./category.model";

@Controller('categories')
export class CategoryController {

    constructor(private categoryService: CategoryService) {
    }

    @ApiOperation({summary:'Create role'})
    @ApiResponse({status:200,type:Role})
    @Post()
    create(@Body() productDto: CreateCategoryDto){
        this.categoryService.createCategory(productDto);
    }

    @ApiOperation({ summary: "Get all category" })
    @ApiResponse({ status: 200, type: [Category] })
    @Get()
    getAll() {
        return this.categoryService.getAllCategories();
    }

    @ApiOperation({ summary: "Get product by id" })
    @ApiResponse({ status: 200, type: [Category] })
    @Get('/:id')
    getById(@Param('id') id:number) {
        return this.categoryService.getCategoryById(id);
    }
}
