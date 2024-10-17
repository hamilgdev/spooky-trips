import { BasicBadge } from '@/components';

import { LevelTerrorOptions } from './level-terror-options';
import { EffectSelectorOptions } from './effect-selector-options';

export const PanelSettings = () => {
  return (
    <div className='w-full h-full'>
      <h3 className='text-lg font-bold text-gray-800'>Relato</h3>
      <hr className='border-t border-gray-300 my-2' />

      <h4 className='text-md text-gray-600 font-bold mt-6 mb-1'>
        Nivel de terror
      </h4>
      <p className='text-xs text-gray-500 mb-2 leading-5'>
        Determina la intensidad de miendo de la historia.
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
          <BasicBadge text='1' />
        </div>

        <div className='flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700'>
          <input
            id='globa-settings'
            type='checkbox'
            value='global-settings'
            name='global-settings'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
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
  );
};
