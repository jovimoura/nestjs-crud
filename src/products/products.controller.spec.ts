import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { getModelToken } from "@nestjs/mongoose";
import { Product, ProductSchema } from './schemas/product.schema';
import { Connection, connect, Model } from "mongoose";
import { ProductDTOStub } from '../../test/stubs/product.dto.stub';
import { ProductAlreadyExists } from '../../test/stubs/product-already-exists.exception';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('ProductsController', () => {
  let controller: ProductsController;
  let mongoConnection: Connection;
  let productModel: Model<Product>;
  let mongod: MongoMemoryServer;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    productModel = mongoConnection.model(Product.name, ProductSchema);
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, {provide: getModelToken(Product.name), useValue: productModel}],
    }).compile();

    controller = app.get<ProductsController>(ProductsController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    // await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe("createProduct", () => {
    it("should return the saved object", async () => {
      const createdArticle = await controller.create(ProductDTOStub());
      expect(createdArticle.name).toBe(ProductDTOStub().name);
    });

    it("should return ProductAlreadyExists (Bad Request - 400) exception", async () => {
      await (new productModel(ProductDTOStub()).save());
      await expect(controller.create(ProductDTOStub()))
        .rejects
        .toThrow(ProductAlreadyExists);
    });
  });

  describe("getProduct", () => {
    it("should return the corresponding saved object", async () => {
      await (new productModel(ProductDTOStub()).save());
      const product = await controller.findOne(ProductDTOStub().name);
      expect(product.name).toBe(ProductDTOStub().name);
    });
    it("should return null", async () => {
      const product = await controller.findOne(ProductDTOStub().name);
      expect(product).toBeNull();
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
