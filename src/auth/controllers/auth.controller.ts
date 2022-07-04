import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { User } from '../../users/entities/user.entity';

import { RegisterUserDto } from '../../users/dtos/user.dto';
import { UsersService } from '../../users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }

  @Post('register')
  create(@Body() payload: RegisterUserDto) {
    payload.role = 'customer';
    return this.usersService.create(payload);
  }

  // Add /me endpoint
}
