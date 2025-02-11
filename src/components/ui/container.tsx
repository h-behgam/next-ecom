import { cn } from '@/lib/tailwind-helper';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
  isFlex?: boolean;
  defaultPY?: boolean;
};

const Container = ({
  children,
  className,
  isFullHeight = false,
  isFullWidth = false,
  isFlex = false,
  defaultPY = false,
}: ContainerProps) => {
  return (
    <section className='w-full'>
      <div
        className={cn('mx-auto max-w-full px-3', className, {
          'h-full': isFullHeight,
          'w-full': isFullWidth,
          'py-5': defaultPY,
          flex: isFlex,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
