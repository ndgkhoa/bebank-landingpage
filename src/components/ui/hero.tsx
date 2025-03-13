import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export const Hero = ({ title, children, className }: HeroProps) => (
  <section>
    <h1 className={cn('text-end text-[18rem] font-semibold tracking-tighter', className)}>
      {title}
    </h1>
    <div className="flex justify-between">{children}</div>
  </section>
);

export const HeroSection = ({ children, className }: HeroSectionProps) => (
  <div className={cn('space-y-4', className)}>{children}</div>
);
