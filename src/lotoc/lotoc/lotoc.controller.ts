import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Lotoc } from '../lotoc.entity';
import { LotocService } from '../lotoc.service';

@Controller('lotoc')
export class LotocController {
    constructor(private lotocService: LotocService){}

    @Get()
    index(): Promise<Lotoc[]> {
        console.log('Get all');
        return this.lotocService.findAll();
    }

    @Post('/create')
    async create(@Body() lotocData: Lotoc): Promise<any> {
        console.log(`Create ${lotocData}`);
        return this.lotocService.create(lotocData);
    }

    @Put('/update/:id')
    async update(@Param('id') id, @Body() lotocData: Lotoc): Promise<any> {
        lotocData.id = Number(id);
        console.log(`Update #${lotocData.id}`);
        return this.lotocService.update(lotocData);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id): Promise<any> {
        console.log(`Delete #${Number(id)}`);
        return this.lotocService.delete(id);
    }
}
