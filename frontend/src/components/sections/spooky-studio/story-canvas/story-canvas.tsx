import Image from 'next/image';

import { DropzoneForm } from '@/components';

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

const StoryPage = () => {
  return (
    <div className='flex h-full justify-center items-center'>
      <div className='flex-1 p-2'>
        <div className=''>
          <Image
            className='object-cover w-full h-full aspect-[9/16] border-0 rounded-sm pointer-events-none'
            src='/assets/images/vacationing.webp'
            alt='ghost'
            width={1080}
            height={1920}
          />
        </div>
      </div>
      <div className='flex-1 p-4 h-full flex items-center justify-center'>
        <p className='text-gray-400 text-center font-semibold text-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          provident quia eaque nesciunt vitae fugiat?
        </p>
      </div>
    </div>
  );
};

export const StoryCanvas = () => {
  return (
    <main className='bg-slate-100 w-full rounded-md'>
      {/* <StoryPage /> */}
      <NewStoryPage />
    </main>
  );
};
