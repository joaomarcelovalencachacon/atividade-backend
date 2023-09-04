import { Body, Controller, Put, ParseArrayPipe } from '@nestjs/common';
import { PurchasedProductService } from './purchased-product.service';
import { PurchasedProductDTO } from './purchased-product.dto';

@Controller('purchased-product')
export class PurchasedProductController {
  constructor(private readonly purchasedProductService: PurchasedProductService) {}

  @Put()
  async purchaseProducts(@Body(new ParseArrayPipe({items: PurchasedProductDTO})) purchasedProducts: PurchasedProductDTO[]) {
    return this.purchasedProductService.purchaseProducts(purchasedProducts);
  }
}