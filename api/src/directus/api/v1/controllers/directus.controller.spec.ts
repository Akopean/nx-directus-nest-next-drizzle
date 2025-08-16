import { Test, TestingModule } from '@nestjs/testing';
import { DirectusController } from './directus.controller';

describe('DirectusController', () => {
  let controller: DirectusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectusController],
    }).compile();

    controller = module.get<DirectusController>(DirectusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
