import { ReactNode } from 'react';

import { cn } from '~/lib/utils';

interface ContentProps {
  contentName: string;
  title?: string;
  titleStyle?: string;
  children: ReactNode;
}

const Container = ({ contentName, title, titleStyle, children }: ContentProps) => {
  return (
    <div className="grid grid-cols-4">
      <p className="col-span-1 font-semibold">{contentName}</p>
      <div className="col-span-3 space-y-[4rem]">
        {title && (
          <p
            className={cn(
              'text-[10rem] tracking-tighter underline decoration-4 underline-offset-[1rem]',
              titleStyle
            )}
          >
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Container;
