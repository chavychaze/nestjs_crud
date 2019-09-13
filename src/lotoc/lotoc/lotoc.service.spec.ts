import { Test, TestingModule } from '@nestjs/testing';
import { LotocService } from '../lotoc.service';

describe('LotocService', () => {
  let service: LotocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LotocService],
    }).compile();

    service = module.get<LotocService>(LotocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
