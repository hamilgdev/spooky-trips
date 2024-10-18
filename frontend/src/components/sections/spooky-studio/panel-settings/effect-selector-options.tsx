'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { EffectTerrorTypes } from '@/interfaces';
import { panelSettingsStore } from '@/store';

interface DefaultEffect {
  id: number;
  value: EffectTerrorTypes;
  src: string;
  alt: string;
}

const DEFAULT_EFFECTS: DefaultEffect[] = [
  {
    id: 1,
    value: 'spooky-ghosts',
    src: '/assets/images/spooky-ghosts.webp',
    alt: 'spooky ghosts effect',
  },
  {
    id: 2,
    value: 'spooky-jack-o-lanterns',
    src: '/assets/images/spooky-jack-o-lanterns.webp',
    alt: 'spooky jack-o-lanterns effect',
  },
  {
    id: 3,
    value: 'spooky-voodoo',
    src: '/assets/images/spooky-voodoo.webp',
    alt: 'spooky voodoo effect',
  },
  {
    id: 4,
    value: 'spooky-witch',
    src: '/assets/images/spooky-witch.webp',
    alt: 'spooky witch effect',
  },
];

interface EffectSelectorProps {
  src: string;
  alt: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const EffectSelector = ({
  alt,
  src,
  isSelected,
  onClick,
}: EffectSelectorProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'p-0.5 h-auto max-w-full rounded-lg border-2 cursor-pointer',
        isSelected && 'border-blue-600'
      )}
    >
      <Image
        className='rounded-lg pointer-events-none'
        src={src}
        alt={alt}
        width={128}
        height={56}
      />
    </div>
  );
};

export const EffectSelectorOptions = () => {
  const { effect: filterEffect, setEffect } = panelSettingsStore();
  return (
    <div className='flex gap-2 flex-wrap'>
      {DEFAULT_EFFECTS.map((effect) => (
        <figure key={effect.id} className='max-w-32'>
          <EffectSelector
            src={effect.src}
            alt={effect.alt}
            isSelected={effect.value === filterEffect}
            onClick={() => setEffect(effect.value)}
          />
          <figcaption className='mt-1 text-[10px] text-center text-gray-500 dark:text-gray-400'>
            {effect.value}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
