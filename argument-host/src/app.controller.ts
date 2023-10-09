import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';
import { Roles } from './role.decorator';
import { Role } from './role';

@Controller()
@UseGuards(AaaGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AaaFilter)
  @Roles(Role.Admin)
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }

  @Get('/hello')
  getHello2(): string {
    return '11222';
  }
}
