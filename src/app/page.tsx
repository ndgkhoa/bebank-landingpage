import dynamic from 'next/dynamic';

const HeroWork = dynamic(() => import('@/app/_components/hero-work'));
const Contact = dynamic(() => import('@/app/_components/contact'));
const SelectedWork = dynamic(() => import('@/app/_components/selected-work'));

const Home = () => {
  return (
    <div className="space-y-[6rem]">
      <HeroWork />
      <SelectedWork />
      <Contact />
    </div>
  );
};

export default Home;
