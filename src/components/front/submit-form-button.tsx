'use client';
import { cn } from '@/lib/tailwind-helper';
import { useFormStatus } from 'react-dom';

export default function SubmitFormButton({
  classname,
  children,
  onClick,
}: {
  // classname?: React.CSSProperties;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      onClick={onClick}
      className={cn(
        'bg-second_color hover:bg-hover_color rounded-lg px-7 py-2 text-white duration-300 disabled:bg-gray-400',
        classname,
      )}
    >
      {children}
    </button>
  );
}
