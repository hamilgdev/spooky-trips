import { Body, Controller, Post } from '@nestjs/common';
import { SpookyService } from './spooky.service';
import { GenerateSpookyStoryDto } from './dto';

@Controller('spooky')
export class SpookyController {
  constructor(private readonly spookyService: SpookyService) {}

  @Post('generate-story')
  async getSpookyStory(@Body() generateSpookyStory: GenerateSpookyStoryDto) {
    return await this.spookyService.getSpookyStory(generateSpookyStory);
  }
}
