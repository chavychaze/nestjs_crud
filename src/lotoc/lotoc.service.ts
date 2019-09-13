import { Injectable } from '@nestjs/common';
import { UpdateResult, DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lotoc } from './lotoc.entity';

@Injectable()
export class LotocService {
    constructor(
        @InjectRepository(Lotoc)
        private lotocRepository: Repository<Lotoc>
    ) { }

    async findAll(): Promise<Lotoc[]> {
        return await this.lotocRepository.find();
    }

    async create(lotoc: Lotoc): Promise<Lotoc> {
        return await this.lotocRepository.save(lotoc);
    }

    async update(lotoc: Lotoc): Promise<UpdateResult> {
        return await this.lotocRepository.update(lotoc.id, lotoc);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.lotocRepository.delete(id);
    }
}
