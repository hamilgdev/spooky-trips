export type LevelTerror = 'low' | 'medium' | 'high';

export type EffectTerror = 'spooky-ghosts' | 'spooky-jack-o-lanterns' | 'spooky-voodoo' | 'spooky-witch';

export interface ImageCaption {
  image: Image;
}

export interface Image {
  url: string;
  public_id: string;
  original_filename: string;
  captioning: Captioning;
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