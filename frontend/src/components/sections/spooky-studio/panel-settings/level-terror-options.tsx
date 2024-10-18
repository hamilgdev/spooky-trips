'use client';

import { TerrorOptionInput } from '@/components';
import { panelSettingsStore } from '@/store';

export const LevelTerrorOptions = () => {
  const { levelTerror, setLevelTerror } = panelSettingsStore();

  return (
    <ul className='flex gap-2 flex-wrap'>
      <li>
        <TerrorOptionInput
          id='low-terror-option'
          value='low'
          label='Amigable'
          icon='👻'
          isSelected={levelTerror === 'low'}
          onClick={() => setLevelTerror('low')}
        />
      </li>

      <li>
        <TerrorOptionInput
          id='medium-terror-option'
          value='medium'
          label='Escalofriante'
          icon='🎃'
          isSelected={levelTerror === 'medium'}
          onClick={() => setLevelTerror('medium')}
        />
      </li>
      <li>
        <TerrorOptionInput
          id='high-terror-option'
          value='high'
          label='Terrorífico'
          icon='👹'
          isSelected={levelTerror === 'high'}
          onClick={() => setLevelTerror('high')}
        />
      </li>
    </ul>
  );
};
