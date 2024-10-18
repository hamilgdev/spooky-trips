import { LevelTerrorTypes } from '@/interfaces';

interface TerrorOptionInputProps {
  id: string;
  value: LevelTerrorTypes;
  label: string;
  icon: string | JSX.Element;
  isSelected?: boolean;
  onClick?: () => void;
}

export const TerrorOptionInput = ({
  id,
  value,
  label,
  icon,
  isSelected,
  onClick,
}: TerrorOptionInputProps) => {
  return (
    <>
      <input
        type='radio'
        id={id}
        value={value}
        name='terror-option'
        className='hidden peer'
        checked={isSelected}
        onClick={onClick}
      />
      <label
        htmlFor={id}
        className='inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-20'
      >
        <div className='flex flex-col justify-center items-center'>
          <i>{icon}</i>
          <div className='w-full text-[10px] font-semibold'>{label}</div>
        </div>
      </label>
    </>
  );
};
