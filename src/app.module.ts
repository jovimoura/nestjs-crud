import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { mongoUri } from './services/mongo-uri';
import { ConfigModule } from '@nestjs/config';
import configuration from './services/config';


@Module({
  imports: [ConfigModule.forRoot({
    load:[configuration],
  }),ProductsModule, MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
