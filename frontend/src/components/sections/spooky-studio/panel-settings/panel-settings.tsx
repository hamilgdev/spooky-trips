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
import { useGenerateStory } from '@/hooks';

export const PanelSettings = () => {
  const { handleGenerateStory } = useGenerateStory();
  const { timeline } = timelineStoryStore();
  const { currentStory } = spookyStoryStore();
  const { levelTerror, effect, globalSettings, setGlobalSettings } =
    panelSettingsStore();

  const currentStorySettings = currentStory?.settings;

  const hasStory = !!currentStory;
  const hasSameEffectSettings =
    currentStorySettings?.effect === effect &&
    currentStorySettings?.level_terror === levelTerror;

  const isStoryPending = currentStory?.status === StoryStatus.PENDING;
  const isStoryCreated = currentStory?.status === StoryStatus.CREATED;

  const isGlobalSettingsSelected = !levelTerror || !effect;

  const onCheckboxHandler = () => setGlobalSettings(!globalSettings);

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
            <span className='text-xs text-gray-600'>Páginas totales:</span>
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
          disabled={
            !hasStory ||
            isGlobalSettingsSelected ||
            isStoryPending ||
            hasSameEffectSettings
          }
          className='w-full rounded-none h-16'
          variant='outline'
          onClick={handleGenerateStory}
        >
          {isStoryCreated ? 'Regenerar' : 'Generar'}&nbsp;Relato
        </Button>
      </div>
    </div>
  );
};
