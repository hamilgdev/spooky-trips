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
  image_url: string | null;
  public_id: string | null;
  original_name: string | null;
  caption: string | null;
  paragraph?: string | null;
  isSelected?: boolean;
  status: StoryStatus;
}