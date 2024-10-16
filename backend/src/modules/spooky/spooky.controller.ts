import { Body, Controller, Post } from '@nestjs/common';
import { SpookyService } from './spooky.service';
import { ImageCaptionDto } from './dto';

@Controller('spooky')
export class SpookyController {
  constructor(private readonly spookyService: SpookyService) {}

  @Post('paragraph')
  async getSpookyStory(@Body() imageCaption: ImageCaptionDto) {
    return await this.spookyService.getSpookyStory(imageCaption);
  }
}
