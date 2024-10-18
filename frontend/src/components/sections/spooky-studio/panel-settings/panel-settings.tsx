'use client';

import { BasicBadge, Button } from '@/components';

import { LevelTerrorOptions } from './level-terror-options';
import { EffectSelectorOptions } from './effect-selector-options';
import {
  panelSettingsStore,
  spookyStoryStore,
  timelineStoryStore,
} from '@/store';
import { StoryStatus } from '@/interfaces';

export const PanelSettings = () => {
  const { timeline } = timelineStoryStore();
  const { currentStory, setCurrentStory } = spookyStoryStore();
  const {
    levelTerror,
    effect,
    globalSettings,
    setGlobalSettings,
    setResetFilters,
  } = panelSettingsStore();

  const hasStory = !!currentStory;

  const isStoryPending = currentStory?.status === StoryStatus.PENDING;
  const isStoryCreated = currentStory?.status === StoryStatus.CREATED;

  const isGlobalSettingsSelected = !levelTerror || !effect;

  const onCheckboxHandler = () => setGlobalSettings(!globalSettings);

  const handleUpdateStory = async () => {
    const params = {
      terror_level: levelTerror,
      terror_effect: effect,
    };

    console.log({ params });
    if (!globalSettings) setResetFilters();

    try {
      const responseStory = {
        image_url:
          'http://res.cloudinary.com/prod-hamilgdev/image/upload/v1729090578/upload-unsigned-images/spooky/nojojakrnzczbp22m3xb.webp',
        public_id: 'upload-unsigned-images/spooky/nojojakrnzczbp22m3xb',
        caption:
          'A family of multiple generations walking together on a beach, with mountains visible in the background and the ocean reflecting the sky.',
        original_name: 'vacationing',
      };

      setCurrentStory({
        ...responseStory,
        paragraph:
          'La familia decidió tomar unas vacaciones en una playa remota, lejos de la civilización. Mientras disfrutaban del hermoso paisaje, una niebla espesa comenzó a rodearlos, ocultando la vista de las montañas. Pronto, las olas del mar se volvieron violentas, arrastrando objetos extraños hacia la orilla. La familia se dio cuenta de que algo siniestro acechaba en el agua, esperando su oportunidad para arrastrarlos hacia lo desconocido. Aterrorizados, intentaron huir, pero descubrieron que la niebla los había atrapado en un lugar donde el tiempo parecía detenerse, condenándolos a una eternidad de horror en esa playa maldita.',
        status: StoryStatus.CREATED,
      });
    } catch (error) {}
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='p-6 flex-1'>
        <h3 className='text-lg font-bold text-gray-800'>Relato</h3>
        <hr className='border-t border-gray-300 my-2' />

        <h4 className='text-md text-gray-600 font-bold mt-6 mb-1'>
          Nivel de terror
        </h4>
        <p className='text-xs text-gray-500 mb-2 leading-5'>
          Determina la intensidad de miendo del relato.
        </p>
        <div className='mb-6'>
          <LevelTerrorOptions />
        </div>

        <h4 className='text-md text-gray-600 font-bold mt-6 mb-1'>Efectos</h4>
        <p className='text-xs text-gray-500 mb-2 leading-5'>
          Añade efectos visuales a tus fotos.
        </p>

        <div className='mb-6'>
          <EffectSelectorOptions />
        </div>

        <h4 className='text-md text-gray-600 font-bold mt-6 mb-1'>
          Configuración
        </h4>
        <div className='flex gap-3 flex-col'>
          <div className='flex gap-1 items-center'>
            <span className='text-xs text-gray-600'>Página actual:</span>
            <BasicBadge text={`${timeline?.length || 0}`} />
          </div>

          <div className='flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700'>
            <input
              id='globa-settings'
              type='checkbox'
              checked={globalSettings}
              name='global-settings'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              onChange={onCheckboxHandler}
            />

            <label
              htmlFor='globa-settings'
              className='w-full py-2 ms-3 text-xs font-medium text-gray-600'
            >
              Aplicar configuración a todas las páginas
            </label>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <Button
          disabled={!hasStory || isGlobalSettingsSelected || isStoryPending}
          className='w-full rounded-none h-16'
          variant='outline'
          onClick={handleUpdateStory}
        >
          {isStoryCreated ? 'Re-generar' : 'Generar'}&nbsp; Relato
        </Button>
      </div>
    </div>
  );
};
