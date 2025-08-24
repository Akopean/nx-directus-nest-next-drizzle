import { Module } from '@nestjs/common';
import { DirectusController } from './controllers/directus.controller';

@Module({
  controllers: [DirectusController],
})
export class V1Module {}
