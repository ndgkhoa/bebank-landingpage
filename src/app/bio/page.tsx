import dynamic from 'next/dynamic';

const HeroBio = dynamic(() => import('@/app/bio/_components/hero-bio'));
const AboutAli = dynamic(() => import('@/app/bio/_components/about-ali'));
const ViralCampaign = dynamic(() => import('@/app/bio/_components/viral-campaign'));
const Roots = dynamic(() => import('@/app/bio/_components/roots'));
const AwardsRecognitions = dynamic(() => import('@/app/bio/_components/awards-recognitions'));
const Contact = dynamic(() => import('@/app/_components/contact'));

const Bio = () => {
  return (
    <div className="space-y-[6rem]">
      <HeroBio />
      <AboutAli />
      <ViralCampaign />
      <Roots />
      <AwardsRecognitions />
      <Contact />
    </div>
  );
};

export default Bio;
