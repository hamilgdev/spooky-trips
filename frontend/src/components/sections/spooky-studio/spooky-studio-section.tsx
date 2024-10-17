import { PanelSettings } from './panel-settings';
import { StoryCanvas } from './story-canvas';
import { TimelinePages } from './timeline-pages';

export const SpookyStudioSection = () => {
  return (
    <section className='p-4 bg-gray-200 h-screen'>
      <div className='l-container h-full'>
        <div className='flex flex-col h-full gap-6'>
          <div className='flex-1 flex gap-8'>
            <aside className='max-w-[312px] h-full bg-slate-50 rounded-md overflow-hidden'>
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
