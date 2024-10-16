import { Injectable } from '@nestjs/common';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { USE_CASES } from '@/src/constant/use-cases';
import { ImageCaptionDto } from '@/src/modules/spooky/dto';

@Injectable()
export class AiAnalyzerService {
  async openAIChat(prompt: ImageCaptionDto) {
    const { imageCaption } = prompt;
    const { spookyStory } = USE_CASES;

    const result = await streamText({
      model: openai('gpt-3.5-turbo-1106'),
      system: spookyStory.prompt(),
      messages: [
        {
          role: 'user',
          content: `Quiero una parrafo corto de terror basado en esta descripción: ${imageCaption}`,
        },
      ],
      ...spookyStory.settings,
    });

    let fullResponse = '';
    for await (const delta of result.textStream) fullResponse += delta;
    return fullResponse;
  }
}
