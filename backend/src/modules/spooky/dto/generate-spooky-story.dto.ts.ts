import { LevelTerrorTypes } from '@/src/types';
import { IsString } from 'class-validator';

export class GenerateSpookyStoryDto {
  @IsString()
  public_image_id: string;

  @IsString()
  image_caption: string;

  @IsString()
  level_terror: LevelTerrorTypes;

  @IsString()
  effect: string;
}
