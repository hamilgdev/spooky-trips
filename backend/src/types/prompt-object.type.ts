import { SpookyEffect } from '@/src/interfaces';

export type SpookyEffectTypes =
  | 'spooky-ghosts'
  | 'spooky-jack-o-lanterns'
  | 'spooky-voodoo'
  | 'spooky-witch';

export type LevelTerrorTypes = 'low' | 'medium' | 'high';

export type PromptType = {
  prompt: (levelTerror: LevelTerrorTypes, effect: string) => string;
  effects: SpookyEffect[];
  settings: {
    maxTokens: number;
    temperature?: number;
    maxRetries?: number;
  };
};

export type PromptObject = {
  [key: string]: PromptType;
};
