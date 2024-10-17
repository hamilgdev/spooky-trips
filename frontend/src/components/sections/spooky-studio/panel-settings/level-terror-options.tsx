import { TerrorOptionInput } from '@/components';

export const LevelTerrorOptions = () => {
  return (
    <ul className='flex gap-2 flex-wrap'>
      <li>
        <TerrorOptionInput
          id='low-terror-option'
          value='low'
          label='Amigable'
          icon='👻'
        />
      </li>

      <li>
        <TerrorOptionInput
          id='medium-terror-option'
          value='medium'
          label='Escalofriante'
          icon='🎃'
        />
      </li>
      <li>
        <TerrorOptionInput
          id='high-terror-option'
          value='high'
          label='Terrorífico'
          icon='👹'
        />
      </li>
    </ul>
  );
};
