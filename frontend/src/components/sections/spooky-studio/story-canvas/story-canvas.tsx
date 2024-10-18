/* eslint-disable @next/next/no-img-element */
'use client';

import { DropzoneForm } from '@/components';
import { spookyStoryStore } from '@/store';
import { Story, StoryStatus } from '@/interfaces';
import { useEffect } from 'react';
import clsx from 'clsx';

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
  const { onAirStory, setAirStory } = spookyStoryStore();

  const { caption, paragraph, tranformed_image } = currentStory;

  useEffect(() => {
    const storyImage = document.getElementById(
      'story-image'
    ) as HTMLImageElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let storyImageEvent: any;
    if (storyImage) {
      storyImageEvent = storyImage.addEventListener('load', () => {
        setAirStory(false);
      });
    }

    return () => {
      if (storyImage) storyImage.removeEventListener('load', storyImageEvent);
    };
  }, [setAirStory, onAirStory]);

  return (
    <div className='flex h-full justify-center items-center'>
      <>
        <div className='flex-1 p-2'>
          <img
            id='story-image'
            className={clsx(
              'object-contain w-full h-full aspect-[9/16] border-0 rounded-sm pointer-events-none',
              onAirStory && 'bg-orange-400 animate-pulse'
            )}
            src={tranformed_image || ''}
            alt={caption || ''}
            width={1080}
            height={1920}
            loading='lazy'
          />
        </div>
        <div className='flex-1 p-4 h-full flex items-center justify-center'>
          <p
            className={clsx(
              'text-gray-400 text-center font-semibold text-md',
              onAirStory && 'animate-pulse'
            )}
          >
            {onAirStory === false && paragraph ? paragraph : '...'}
          </p>
        </div>
      </>
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
