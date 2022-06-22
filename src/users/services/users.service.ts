import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { Order } from '../entities/orders.entity';

import { ProductsService } from './../../products/services/products.service';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    @Inject('MONGO') private databaseMongo: Db,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      email: 'name@mail.com',
      password: 'password',
      role: 'admin',
    },
  ];

  findAll() {
    return this.users;
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

    async create(data: CreateUserDto) {
      const newModel = new this.userModel(data);
      return newModel.save();
      const hashPassword = await bcrypt.hash(newModel.password, 10);
      newModel.password = hashPassword;
      const model = await newModel.save();
      const { password, ...rta } = model.toJSON();
      return rta;
    }

    findByEmail(email: string) {
      return this.userModel.findOne({ email }).exec();
    }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
