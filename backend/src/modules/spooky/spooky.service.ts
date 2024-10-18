import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';
import { GenerateSpookyStoryDto } from './dto';
import { AiAnalyzerService } from '@/src/services/openai/ai-analyzer.service';
import { SpookyStory } from '@/src/interfaces';
import { formatTransformedImageHandler } from '@/src/handlers';

@Injectable()
export class SpookyService {
  constructor(
    private readonly cloudinaryDrivenService: CloudinaryDrivenService,
    private readonly aiAnalyzerService: AiAnalyzerService,
  ) {}

  async getSpookyStory(
    generateSpookyStory: GenerateSpookyStoryDto,
  ): Promise<SpookyStory> {
    try {
      const spookyImage =
        await this.cloudinaryDrivenService.generativeSpookyBackground(
          generateSpookyStory,
        );

      const spookyStory =
        await this.aiAnalyzerService.openAIChat(generateSpookyStory);

      return {
        transformed_image_url: formatTransformedImageHandler(spookyImage),
        spooky_story: this.formatResponse(spookyStory),
      };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error al obtener la historia de terror');
    }
  }

  private formatResponse(analyzedImageCaption: string) {
    try {
      const parsedResponse = JSON.parse(analyzedImageCaption);
      return parsedResponse?.story || '';
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error al formatear la respuesta');
    }
  }
}
