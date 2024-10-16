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