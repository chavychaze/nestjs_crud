import { Test, TestingModule } from '@nestjs/testing';
import { LotocController } from './lotoc.controller';

describe('Lotoc Controller', () => {
  let controller: LotocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotocController],
    }).compile();

    controller = module.get<LotocController>(LotocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
