import { Module } from '@nestjs/common';
import { ApiModule } from '../directus/api.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
