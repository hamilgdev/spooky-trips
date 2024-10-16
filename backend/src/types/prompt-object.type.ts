export type PromptType = {
  prompt: () => string;
  settings: {
    maxTokens: number;
    temperature?: number;
    maxRetries?: number;
  };
};

export type PromptObject = {
  [key: string]: PromptType;
};
