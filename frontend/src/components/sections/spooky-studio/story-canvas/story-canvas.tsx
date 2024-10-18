/* eslint-disable @next/next/no-img-element */
'use client';

import { DropzoneForm } from '@/components';
import { spookyStoryStore } from '@/store';
import { Story, StoryStatus } from '@/interfaces';

const NewStoryPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <p className='text-md font-bold text-gray-600 text-center'>
        Crea tu siguiente página
      </p>
      <div className='mt-4 w-full max-w-sm'>
        <DropzoneForm />
      </div>
    </div>
  );
};

const StoryPage = ({ currentStory }: { currentStory: Story }) => {
  const { caption, paragraph, tranformed_image } = currentStory;

  return (
    <div className='flex h-full justify-center items-center'>
      <div className='flex-1 p-2'>
        <img
          className='object-contain w-full h-full aspect-[9/16] border-0 rounded-sm pointer-events-none'
          src={tranformed_image || ''}
          alt={caption || ''}
          width={1080}
          height={1920}
        />
      </div>
      <div className='flex-1 p-4 h-full flex items-center justify-center'>
        <p className='text-gray-400 text-center font-semibold text-md'>
          {paragraph || '...'}
        </p>
      </div>
    </div>
  );
};

export const StoryCanvas = () => {
  const { currentStory } = spookyStoryStore();

  if (!currentStory) return null;

  const isStoryPending = currentStory?.status === StoryStatus.PENDING;
  const isStoryEditing = currentStory?.status === StoryStatus.EDITING;
  const isStoryCreated = currentStory?.status === StoryStatus.CREATED;

  return (
    <main className='bg-slate-100 w-full rounded-md'>
      {isStoryPending && <NewStoryPage />}
      {(isStoryEditing || isStoryCreated) && (
        <StoryPage currentStory={currentStory} />
      )}
    </main>
  );
};
