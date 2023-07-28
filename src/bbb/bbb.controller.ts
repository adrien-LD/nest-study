import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { AaaService } from '../aaa/aaa.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { RoleGuard } from '@src/common/role.guard';
import { Roles } from '@src/common/roles.decorator';

@Controller('bbb')
@UseGuards(RoleGuard)
export class BbbController {
  @Inject(AaaService)
  private readonly aaaService: AaaService;
  constructor(private readonly bbbService: BbbService) {}

  @Post()
  @Roles('admin')
  create(@Body() createBbbDto: CreateBbbDto) {
    return this.bbbService.create(createBbbDto);
  }

  @Get('/test')
  findAll() {
    return this.bbbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}
