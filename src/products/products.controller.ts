import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return await this.productsService.delete(id);
  }
}
