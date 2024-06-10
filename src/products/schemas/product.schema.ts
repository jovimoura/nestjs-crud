import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
}

export const ProductSchema = SchemaFactory.createForClass(Product);