interface BadgeProps {
  text: string;
}

export const BasicBadge = ({ text }: BadgeProps) => {
  return (
    <span className='bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400'>
      {text}
    </span>
  );
};
