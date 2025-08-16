import { Module } from '@nestjs/common';
import { DirectusController } from './controllers/directus.controller';
import { DirectusService } from './services/directus.service';

@Module({
  controllers: [DirectusController],
  providers: [DirectusService],
})
export class V1Module {}
