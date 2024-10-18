export type LevelTerrorTypes = 'low' | 'medium' | 'high';

export type EffectTerrorTypes = 'spooky-ghosts' | 'spooky-jack-o-lanterns' | 'spooky-voodoo' | 'spooky-witch';

export interface ImageCaption {
  image: Image;
}

export interface Image {
  guid: string;
  public_id: string;
  secure_url: string;
  original_filename: string;
  captioning: Captioning;
  transformed: string;
}

export interface Captioning {
  status: string;
  data: Data;
  schema_version: number;
  model_version: number;
}

export interface Data {
  caption: string;
}

export type FileUploadResponse = ImageCaption

export interface GenerateStoryResponse {
  transformed_image_url: string;
  spooky_story: string;
}

export interface GenerateStoryParams {
  public_image_id: string;
  image_caption: string;
  effect: EffectTerrorTypes;
  level_terror: LevelTerrorTypes;
}