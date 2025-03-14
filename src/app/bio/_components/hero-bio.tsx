import { memo } from 'react';

import { Hero, HeroSection } from '@/components/ui/hero';
import InfoList from '@/app/_components/info-list';

const HeroBio = memo(() => {
  return (
    <Hero hasBackground title="ali ali" className="ml-[5rem] text-start">
      <HeroSection className="ml-[5rem]">
        <p className="w-[22rem] text-xl">
          Ali was just named in Adweek’s esteemed “Creative-100” list, as one of Ten Most Exciting
          Directors in 2020.
        </p>
      </HeroSection>

      <HeroSection>
        <InfoList />
      </HeroSection>
    </Hero>
  );
});

export default HeroBio;
