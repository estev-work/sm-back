import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from "./dto/create-category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {
    }

    async createCategory(dto: CreateCategoryDto) {
        return await this.categoryRepository.create(dto);
    }

    async getAllCategories() {
        return await this.categoryRepository.findAll({ include: { all: true } })
    }

    async getCategoryById(id:number) {
        return await this.categoryRepository.findOne({ where: { id } })
    }
}
