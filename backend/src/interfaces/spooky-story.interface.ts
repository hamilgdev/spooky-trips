import { SpookyEffectTypes } from '@/src/types';

export interface SpookyStory {
  transformed_image_url: any;
  spooky_story: string;
}

export interface SpookyEffect {
  key: SpookyEffectTypes;
  prompt: string;
}

export interface SpookyEffects {
  effect: SpookyEffect[];
}
