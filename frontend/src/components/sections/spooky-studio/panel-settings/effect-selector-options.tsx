'use client';

import Image from 'next/image';
import clsx from 'clsx';

const DEFAULT_EFFECTS = [
  {
    id: 1,
    value: 'spooky-ghosts',
    src: '/assets/images/spooky-ghosts.webp',
    alt: 'spooky ghosts effect',
    width: 128,
    height: 56,
  },
  {
    id: 2,
    value: 'spooky-jack-o-lanterns',
    src: '/assets/images/spooky-jack-o-lanterns.webp',
    alt: 'spooky jack-o-lanterns effect',
    width: 128,
    height: 56,
  },
  {
    id: 3,
    value: 'spooky-voodoo',
    src: '/assets/images/spooky-voodoo.webp',
    alt: 'spooky voodoo effect',
    width: 128,
    height: 56,
  },
  {
    id: 4,
    value: 'spooky-witch',
    src: '/assets/images/spooky-witch.webp',
    alt: 'spooky witch effect',
    width: 128,
    height: 56,
  },
];

interface EffectSelectorProps {
  src: string;
  alt: string;
  value: string;
  width: number;
  height: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const EffectSelector = ({
  alt,
  value,
  height,
  src,
  width,
  isSelected,
  onClick,
}: EffectSelectorProps) => {
  return (
    <div
      className={clsx(
        'p-0.5 h-auto max-w-full rounded-lg border-2 border-gray-200 hover:border-blue-600 cursor-pointer',
        isSelected && 'border-blue-600'
      )}
      onClick={() => console.log('Effect selected', value)}
    >
      <Image
        className='rounded-lg pointer-events-none'
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export const EffectSelectorOptions = () => {
  return (
    <div className='flex gap-2 flex-wrap'>
      {DEFAULT_EFFECTS.map((effect) => (
        <figure key={effect.id} className='max-w-32'>
          <EffectSelector
            src={effect.src}
            alt={effect.alt}
            value={effect.value}
            width={effect.width}
            height={effect.height}
          />
          <figcaption className='mt-1 text-[10px] text-center text-gray-500 dark:text-gray-400'>
            {effect.value}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
