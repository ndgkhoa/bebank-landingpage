import dynamic from 'next/dynamic';

import PageLayout from '~/components/layout/page-layout';
const HeroWork = dynamic(() => import('~/features/home/components/hero-work'));
const Contact = dynamic(() => import('~/features/home/components/contact'));
const SelectedWork = dynamic(() => import('~/features/home/components/selected-work'));

const Home = () => {
  return (
    <PageLayout>
      <HeroWork />
      <SelectedWork />
      <Contact />
    </PageLayout>
  );
};

export default Home;
