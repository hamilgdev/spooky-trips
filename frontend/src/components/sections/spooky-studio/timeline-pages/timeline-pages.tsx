'use client';

import clsx from 'clsx';

import { Button, CopyPlusIcon, TrashIcon } from '@/components';
import { spookyStoryStore, timelineStoryStore } from '@/store';
import { StoryStatus } from '@/interfaces';

const LIMIT_PAGES = 5;

const PageCard = ({
  status,
  isSelected,
  count,
  onClick,
}: {
  status?: StoryStatus;
  isSelected?: boolean;
  count: number;
  onClick?: () => void;
}) => {
  const { setRemoveCurrentStory } = spookyStoryStore();
  return (
    <article className='cursor-pointe relative' onClick={onClick}>
      {status === StoryStatus.PENDING && (
        <div className='absolute right-1 top-1' onClick={setRemoveCurrentStory}>
          <Button variant='ghost' className='text-white p-1 size-8'>
            <TrashIcon />
          </Button>
        </div>
      )}

      <div
        className={clsx(
          'flex flex-col items-center w-20 h-14 bg-gray-400 rounded-sm shadow-md border-2  hover:border-blue-600 cursor-pointer',
          isSelected && 'bg-slate-600 border-blue-600'
        )}
      />
      <span className='text-xs font-semibold text-gray-400'>
        Página {count}
      </span>
    </article>
  );
};

const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex w-fit items-center text-blue-600 after:content-[''] after:pr-8 after:w-fit after:h-1 after:border-b after:border-gray-400 after:border-1 after:mx-6 last:after:hidden">
      {children}
    </li>
  );
};

export const TimelinePages = () => {
  const { currentStory, setNewStory, setSelectStory } = spookyStoryStore();
  const { timeline } = timelineStoryStore();

  const handleFinishStory = () => {
    console.log('finish story');
  };

  // validations

  const isFull = timeline?.length === LIMIT_PAGES;

  const isStoryPending = currentStory?.status === StoryStatus.PENDING;
  const isStoryEditing = currentStory?.status === StoryStatus.EDITING;

  return (
    <footer className='bg-slate-50 rounded-md min-h-[124px] flex justify-center overflow-hidden '>
      <div className='p-6 flex-1 flex justify-center flex-col'>
        <ol className='flex text-sm font-medium text-center text-gray-500 items-center'>
          {timeline?.map((story, index) => (
            <TimelineItem key={index + 1}>
              <PageCard
                count={index + 1}
                status={story.status}
                isSelected={story.isSelected}
                onClick={() => setSelectStory(story)}
              />
            </TimelineItem>
          ))}
          {!isFull && (
            <TimelineItem>
              <Button
                title='Agregar página'
                variant='ghost'
                disabled={isStoryPending || isStoryEditing}
                className='flex items-center text-gray-400 text-xs font-semibold gap-2 mt-1 cursor-pointer'
                onClick={setNewStory}
              >
                <CopyPlusIcon />
              </Button>
            </TimelineItem>
          )}
        </ol>
      </div>

      <div>
        <Button
          className='w-full rounded-none h-full'
          variant='outline'
          onClick={handleFinishStory}
        >
          Terminar Relatos
        </Button>
      </div>
    </footer>
  );
};
