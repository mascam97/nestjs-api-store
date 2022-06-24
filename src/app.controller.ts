import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';

import { ApiKeyGuard } from './auth/guards/api-key.guard';
import { AppService } from './app.service';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get('protected-route')
  newEndpoint() {
    return 'protected route';
  }
}
