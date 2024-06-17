import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import {
  Document
} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()
  category: string;

  @Prop()
  stock: string;

  @Prop()
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);