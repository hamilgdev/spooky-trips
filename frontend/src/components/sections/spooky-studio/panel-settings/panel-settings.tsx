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
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <div className='p-6 flex-1'>
        <h2 className='text-2xl font-bold text-gray-100 font-henny-penny'>
          Relato
        </h2>
        <hr className='border-t border-gray-300 my-2' />

        <h4 className='text-md text-white font-bold mt-6 mb-1'>
          Nivel de terror
        </h4>
        <p className='text-xs text-gray-200 mb-2 leading-5'>
          Determina la intensidad de miendo del relato.
        </p>
        <div className='mb-6'>
          <LevelTerrorOptions />
        </div>

        <h4 className='text-md text-white font-bold mt-6 mb-1'>Efectos</h4>
        <p className='text-xs text-gray-200 mb-2 leading-5'>
          Añade efectos visuales a tus fotos.
        </p>

        <div className='mb-6'>
          <EffectSelectorOptions />
        </div>

        <h4 className='text-md text-white font-bold mt-6 mb-1'>
          Configuración
        </h4>
        <div className='flex gap-3 flex-col'>
          <div className='flex gap-1 items-center'>
            <span className='text-xs text-white'>Páginas totales:</span>
            <BasicBadge text={`${timeline?.length || 0}`} />
          </div>

          <div className='flex items-center ps-4 border-2 border-purple-950/50 bg-purple-900/70 rounded-md'>
            <input
              id='globa-settings'
              type='checkbox'
              checked={globalSettings}
              name='global-settings'
              className='w-4 h-4 text-purple-600 bg-purple-500 border-purple-800 rounded-md'
              onChange={onCheckboxHandler}
            />

            <label
              htmlFor='globa-settings'
              className='w-full py-2 ms-3 text-xs font-medium text-white'
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
          className='w-full rounded-none h-16 text-white font-bold text-lg'
          variant='default'
          onClick={handleGenerateStory}
        >
          {isStoryCreated ? 'Regenerar' : 'Generar'}&nbsp;Relato
        </Button>
      </div>
    </div>
  );
};
