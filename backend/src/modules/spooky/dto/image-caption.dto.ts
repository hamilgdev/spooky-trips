import { IsString } from 'class-validator';

export class ImageCaptionDto {
  @IsString()
  imageCaption: string;
}
