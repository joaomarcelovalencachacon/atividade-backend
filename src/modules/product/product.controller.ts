import { Body, Controller, Param, Post, Delete, Put, Get, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto'; 

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Post()
  async create(@Body() data: ProductDTO) {
    return this.productService.create(data);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Put(":id")
  async updateOne(@Param("id", ParseIntPipe) id: number, @Body() data: ProductDTO) {
    return this.productService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
