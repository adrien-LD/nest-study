import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}
