import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';

import { OrdersService } from '../services/orders.service';
import {
  CreateOrderDto,
  UpdateOrderDto,
  AddProductsToOrderDto,
} from '../dtos/order.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  // TODO: Add logic to index only customer orders
  @Roles(Role.CUSTOMER)
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  // TODO: Add logic to show order if belongs to customer
  @Roles(Role.CUSTOMER)
  @Get(':id')
  get(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Roles(Role.CUSTOMER)
  @Post()
  create(@Body() payload: CreateOrderDto) {
    // TODO: Associate auth user with order, not sent in body
    return this.ordersService.create(payload);
  }

  @Roles(Role.CUSTOMER)
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(id, payload);
  }

  @Roles(Role.CUSTOMER)
  @Put(':id/products')
  updateProducts(
    @Param('id') id: string,
    @Body() payload: AddProductsToOrderDto,
    ) {
      return this.ordersService.addProducts(id, payload.productsIds);
    }

  @Roles(Role.CUSTOMER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }

  @Roles(Role.CUSTOMER)
  @Delete(':id/products/:productId')
  removeProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return this.ordersService.removeProduct(id, productId);
  }

  // @Roles(Role.SELLER)
  // @Delete(':id/approve')
  // TODO: Add endpoint to approve orders by a seller
}
