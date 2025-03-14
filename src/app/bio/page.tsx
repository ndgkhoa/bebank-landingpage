import dynamic from 'next/dynamic';
import { memo } from 'react';

const HeroBio = dynamic(() => import('@/app/bio/_components/hero-bio'));
const AboutAli = dynamic(() => import('@/app/bio/_components/about-ali'));
const ViralCampaign = dynamic(() => import('@/app/bio/_components/viral-campaign'));
const Contact = dynamic(() => import('@/app/_components/contact'));

const Bio = memo(() => {
  return (
    <div className="space-y-[6rem]">
      <HeroBio />
      <AboutAli />
      <ViralCampaign/>
      <Contact />
    </div>
  );
});

export default Bio;
