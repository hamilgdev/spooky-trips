import { Module } from '@nestjs/common';

import { HealthCheckModule } from '@/src/modules/health-check/health-check.module';

@Module({
  imports: [HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
