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
        checked={isSelected || false}
        onClick={onClick}
      />
      <label
        htmlFor={id}
        className='inline-flex items-center justify-center w-full p-2 text-gray-400 bg-purple-950 border-2 border-purple-800 rounded-lg cursor-pointer peer-checked:border-purple-400 hover:text-gray-100 peer-checked:text-gray-50 hover:bg-purple-800  min-w-20'
      >
        <div className='flex flex-col justify-center items-center'>
          <i>{icon}</i>
          <div className='w-full text-[10px] font-semibold'>{label}</div>
        </div>
      </label>
    </>
  );
};
