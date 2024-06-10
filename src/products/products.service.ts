import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}
  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
