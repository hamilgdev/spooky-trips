import { EffectTerrorTypes, LevelTerrorTypes } from "@/interfaces";

export enum StoryStatus {
  CREATED = 'created',
  PENDING = 'pending',
  EDITING = 'editing',
}

export interface IconsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export interface Story {
  guid?: string;
  image_url: string | null;
  tranformed_image?: string | null;
  public_id: string | null;
  original_name: string | null;
  caption: string | null;
  paragraph?: string | null;
  isSelected?: boolean;
  status: StoryStatus;
  settings?: {
    level_terror: LevelTerrorTypes;
    effect: EffectTerrorTypes;
  }
}