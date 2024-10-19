'use client';

import { Button, CopyPlusIcon, TrashIcon } from '@/components';
import { spookyStoryStore, timelineStoryStore } from '@/store';
import { Story, StoryStatus } from '@/interfaces';

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
        style={
          isSelected ? { borderColor: '#a855f7' } : { borderColor: '#581c87' }
        }
        className='flex flex-col items-center w-20 h-14 bg-purple-950 rounded-md shadow-md border-2 border-purple-900 hover:border-purple-500 cursor-pointer hover:bg-purple-800'
      />
      <span className='text-xs font-semibold text-gray-100'>
        Página {count}
      </span>
    </article>
  );
};

const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex w-fit items-center after:content-[''] after:pr-8 after:w-fit after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 last:after:hidden">
      {children}
    </li>
  );
};

export const TimelinePages = () => {
  const { currentStory, setNewStory, setSelectStory, onAirStory } =
    spookyStoryStore();
  const { timeline } = timelineStoryStore();

  const handleFinishStory = () => {
    console.log('finish story');
  };

  // validations

  const isFull = timeline?.length === LIMIT_PAGES;

  const isStoryEditing = currentStory?.status === StoryStatus.EDITING;
  const hasSomeStoryPending = timeline?.some(
    (story) => story.status === StoryStatus.PENDING
  );

  const handleSelectStory = (story: Story) => {
    if (onAirStory) return;
    setSelectStory(story);
  };

  return (
    <footer className='bg-gray-800/60 rounded-md  min-h-[124px] flex justify-center overflow-hidden '>
      <div className='p-6 flex-1 flex justify-center flex-col'>
        <ol className='flex text-sm font-medium text-center items-center'>
          {timeline?.map((story, index) => (
            <TimelineItem key={index + 1}>
              <PageCard
                count={index + 1}
                status={story.status}
                isSelected={story.isSelected}
                onClick={() => handleSelectStory(story)}
              />
            </TimelineItem>
          ))}
          {!isFull && (
            <TimelineItem>
              <Button
                title='Agregar página'
                variant='ghost'
                disabled={isStoryEditing || hasSomeStoryPending}
                className='flex items-center text-gray-100 text-xs font-semibold gap-2 mt-1 cursor-pointer'
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
          className='w-full rounded-none h-full font-bold text-lg text-white'
          variant='default'
          onClick={handleFinishStory}
        >
          Terminar Relatos
        </Button>
      </div>
    </footer>
  );
};
