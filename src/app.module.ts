import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { PurchasedProductModule } from './modules/purchased-product/purchased-product.module';

@Module({
  imports: [ProductModule, PurchasedProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
