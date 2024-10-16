import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';
import { ImageCaptionDto } from './dto';
import { AiAnalyzerService } from '@/src/services/openai/ai-analyzer.service';
import { SpookyStory } from '@/src/interfaces';

@Injectable()
export class SpookyService {
  constructor(
    private readonly cloudinaryDrivenService: CloudinaryDrivenService,
    private readonly aiAnalyzerService: AiAnalyzerService,
  ) {}

  async getSpookyStory(imageCaption: ImageCaptionDto): Promise<SpookyStory> {
    try {
      const spookyStory = await this.aiAnalyzerService.openAIChat(imageCaption);
      return this.formatResponse(spookyStory);
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error al obtener la historia de terror');
    }
  }

  private formatResponse(analyzedImageCaption: string) {
    try {
      const parsedResponse: SpookyStory = JSON.parse(analyzedImageCaption);
      return {
        story: parsedResponse.story,
      };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error al formatear la respuesta');
    }
  }
}
