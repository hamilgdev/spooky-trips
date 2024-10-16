import { Module } from '@nestjs/common';

import { HealthCheckModule } from '@/src/modules/health-check/health-check.module';
import { SpookyModule } from '@/src/modules/spooky/spooky.module';
import { FilesModule } from '@/src/modules/files/files.module';

@Module({
  imports: [HealthCheckModule, SpookyModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
