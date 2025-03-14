import { memo } from 'react';

import { Hero, HeroSection } from '@/components/ui/hero';
import InfoList from '@/app/_components/info-list';
import Container from '@/components/ui/container';

const HeroContact = memo(() => {
  return (
    <Hero title="Get in touch" className="text-start">
      <HeroSection>
        <Container contentName="REPPED BY">
          <div>
            <p className="w-[40rem] text-5xl font-semibold">ART & SCIENCES</p>
            <p className="w-[40rem] text-5xl font-semibold">WANDA</p>
            <p className="w-[40rem] text-5xl font-semibold">LITTLE MINX</p>
            <p className="w-[40rem] text-5xl font-semibold">MARKENFILM</p>
            <p className="w-[40rem] text-5xl font-semibold">GOOD PEOPLE</p>
          </div>
        </Container>
      </HeroSection>

      <HeroSection>
        <InfoList />
      </HeroSection>
    </Hero>
  );
});

export default HeroContact;
