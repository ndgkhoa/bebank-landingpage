import dynamic from 'next/dynamic';

import PageLayout from '~/components/layout/page-layout';
const HeroBio = dynamic(() => import('~/features/bio/components/hero-bio'));
const AboutAli = dynamic(() => import('~/features/bio/components/about-ali'));
const ViralCampaign = dynamic(() => import('~/features/bio/components/viral-campaign'));
const Roots = dynamic(() => import('~/features/bio/components/roots'));
const AwardsRecognitions = dynamic(() => import('~/features/bio/components/awards-recognitions'));
const Contact = dynamic(() => import('~/features/home/components/contact'));

const Bio = () => {
  return (
    <PageLayout>
      <HeroBio />
      <AboutAli />
      <ViralCampaign />
      <Roots />
      <AwardsRecognitions />
      <Contact />
    </PageLayout>
  );
};

export default Bio;
