interface BadgeProps {
  text: string;
}

export const BasicBadge = ({ text }: BadgeProps) => {
  return (
    <span className='bg-purple-800 text-purple-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-purple-400'>
      {text}
    </span>
  );
};
