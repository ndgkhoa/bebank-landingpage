import { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '~/lib/utils';

interface HeroProps {
  title: string;
  hasBackground?: boolean;
  children: ReactNode;
  className?: string;
}

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export const Hero = ({ title, hasBackground, children, className }: HeroProps) => (
  <section className="relative">
    <h1
      className={cn(
        'relative z-10 text-end text-[16rem] font-semibold tracking-tighter',
        className
      )}
    >
      {title}
    </h1>
    {hasBackground && (
      <div className="absolute top-10 right-10 z-0">
        <Image src="/images/bio.jpg" alt="bio" width={750} height={750} loading="lazy" />
      </div>
    )}
    <div className="relative z-10 flex justify-between">{children}</div>
  </section>
);

export const HeroSection = ({ children, className }: HeroSectionProps) => (
  <div className={cn('space-y-4', className)}>{children}</div>
);
