import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpCode,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Post created',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Post updated',
      data: {
        payload,
      },
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Post ${id} deleted`,
    };
  }
}
