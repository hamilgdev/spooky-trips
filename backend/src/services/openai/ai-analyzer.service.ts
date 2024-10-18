import { Injectable } from '@nestjs/common';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { USE_CASES } from '@/src/constant/use-cases';
import { GenerateSpookyStoryDto } from '@/src/modules/spooky/dto';

@Injectable()
export class AiAnalyzerService {
  async openAIChat(prompt: GenerateSpookyStoryDto) {
    const { effect, level_terror, image_caption } = prompt;
    const { spookyStory } = USE_CASES;
    const customEffect = spookyStory.effects.find((e) => e.key === effect);

    const result = await streamText({
      model: openai('gpt-3.5-turbo-1106'),
      system: spookyStory.prompt(level_terror, customEffect.prompt),
      messages: [
        {
          role: 'user',
          content: `Quiero una parrafo corto de terror basado en esta descripción: ${image_caption}`,
        },
      ],
      ...spookyStory.settings,
    });

    let fullResponse = '';
    for await (const delta of result.textStream) fullResponse += delta;
    return fullResponse;
  }
}
