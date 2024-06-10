import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return await this.productsService.create(product);
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
  async update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
    return await this.productsService.update(id, product);
  }


  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return await this.productsService.delete(id);
  }
}
