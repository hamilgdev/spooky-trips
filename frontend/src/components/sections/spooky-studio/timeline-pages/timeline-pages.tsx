'use client';

import { CopyPlusIcon } from '@/components';

const PAGES = [
  {
    title: 'Página 1',
  },
];

const PageCard = ({ onClick }: { onClick?: () => void }) => {
  return (
    <article className='cursor-pointer' onClick={onClick}>
      <div className='flex flex-col items-center w-20 h-14 bg-gray-400 rounded-sm shadow-md'></div>
      <span className='text-xs font-semibold text-gray-400'>Página 1</span>
    </article>
  );
};

const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
      {children}
    </li>
  );
};

export const TimelinePages = () => {
  return (
    <footer className='bg-slate-50 rounded-md p-6 min-h-32 flex flex-col justify-center'>
      <ol className='flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base'>
        {PAGES.map((page, index) => (
          <>
            <TimelineItem key={index}>
              <PageCard />
            </TimelineItem>
            <TimelineItem>
              <div
                className='flex items-center text-gray-400 text-xs font-semibold gap-2 mt-1 cursor-pointer'
                onClick={() => console.log('add page')}
              >
                <CopyPlusIcon />
              </div>
            </TimelineItem>
          </>
        ))}
      </ol>
    </footer>
  );
};
