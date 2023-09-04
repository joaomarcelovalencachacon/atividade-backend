import { Module } from '@nestjs/common';
import { PurchasedProductService } from './purchased-product.service';
import { PurchasedProductController } from './purchased-product.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PurchasedProductController],
  providers: [PurchasedProductService, PrismaService],
})
export class PurchasedProductModule {}
