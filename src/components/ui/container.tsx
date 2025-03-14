import { ReactNode } from 'react';

interface ContainerProps {
  contentName: string;
  title?: string;
  children: ReactNode;
}

const Container = ({ contentName, title, children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-4">
      <p className="col-span-1 font-semibold">{contentName}</p>
      <div className="col-span-3 space-y-[4rem]">
        {title && (
          <p className="text-[10rem] tracking-tighter underline decoration-4 underline-offset-[1rem]">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Container;
