'use client';

import { TerrorOptionInput } from '@/components';
import { panelSettingsStore } from '@/store';

export const LevelTerrorOptions = () => {
  const { setLevelTerror } = panelSettingsStore();

  return (
    <ul className='flex gap-2 flex-wrap'>
      <li>
        <TerrorOptionInput
          id='low-terror-option'
          value='low'
          label='Amigable'
          icon='👻'
          onClick={() => setLevelTerror('low')}
        />
      </li>

      <li>
        <TerrorOptionInput
          id='medium-terror-option'
          value='medium'
          label='Escalofriante'
          icon='🎃'
          onClick={() => setLevelTerror('medium')}
        />
      </li>
      <li>
        <TerrorOptionInput
          id='high-terror-option'
          value='high'
          label='Terrorífico'
          icon='👹'
          onClick={() => setLevelTerror('high')}
        />
      </li>
    </ul>
  );
};
