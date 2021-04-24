import { Injectable } from '@nestjs/common';
import { CreateProductDto } from "./dto/create-product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product) private productRepository: typeof Product) {
    }

    async createProduct(dto: CreateProductDto) {
        return await this.productRepository.create(dto);
    }

    async getAllProducts() {
        return await this.productRepository.findAll({ include: { all: true } })
    }

    async getProductById(id:number) {
        return await this.productRepository.findOne({ where: { id }, include: { all: true } });
    }
}
