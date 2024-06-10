import { Product } from "src/products/schemas/product.schema";

export const ProductDTOStub = (): Product => {
  return {
    name: "Name of Product",
    description: "Description of Product",
    price: "R$: 10,00",
    category: "Category Test",
    stock: "10"
  };
};