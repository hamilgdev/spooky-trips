import { Module } from '@nestjs/common';
import { SpookyService } from './spooky.service';
import { SpookyController } from './spooky.controller';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';
import { AiAnalyzerService } from '@/src/services/openai/ai-analyzer.service';

@Module({
  controllers: [SpookyController],
  providers: [SpookyService, CloudinaryDrivenService, AiAnalyzerService],
})
export class SpookyModule {}
