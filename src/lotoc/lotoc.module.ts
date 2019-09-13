import { Module } from '@nestjs/common';
import { LotocService } from './lotoc.service';
import { LotocController } from './lotoc/lotoc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lotoc } from './lotoc.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lotoc])
  ],
  providers: [LotocService],
  controllers: [LotocController]
})
export class LotocModule { }
// creating a CRUD service NEXT