'use client';

import { ReactNode } from 'react';

interface InfoButtonProps {
  children: ReactNode;
  disabled: boolean;
  className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ClientButton({
  children,
  disabled,
  className,
  onClick,
}: InfoButtonProps) {
  const defaultClassName =
    'w-full rounded-sm bg-slate-50 px-5 py-2 text-slate-700 duration-300 hover:bg-slate-100';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className ? className : defaultClassName}
    >
      {children}
    </button>
  );
}
