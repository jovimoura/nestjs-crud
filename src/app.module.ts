import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './services/env';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
  }),ProductsModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
    }),
    inject: [ConfigService],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
