import { PanelSettings } from './panel-settings';
import { StoryCanvas } from './story-canvas';
import { TimelinePages } from './timeline-pages';

export const SpookyStudioSection = () => {
  return (
    <section className='p-4 h-screen w-full relative overflow-hidden  bg-gradient-to-b from-[#09203f] to-[#09203f]'>
      <div
        className='pointer-events-none w-full h-full absolute -top-20 -left-6'
        style={{
          backgroundImage: 'url(/assets/svgs/spider-left.svg)',
          backgroundSize: '30%',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />

      <div
        className='pointer-events-none w-full h-full absolute -top-20 left-16'
        style={{
          backgroundImage: 'url(/assets/svgs/spider-right.svg)',
          backgroundSize: '30%',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }}
      />
      <div className='l-container h-full relative'>
        <div className='flex flex-col h-full gap-6'>
          <div className='flex-1 flex gap-8'>
            <aside className='max-w-[312px] h-full bg-gray-800/50 rounded-md overflow-hidden'>
              <PanelSettings />
            </aside>
            <StoryCanvas />
          </div>
          <TimelinePages />
        </div>
      </div>
    </section>
  );
};
