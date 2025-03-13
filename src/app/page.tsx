import dynamic from 'next/dynamic';

const WorkHero = dynamic(() => import('@/app/_components/work-hero'));
const Contact = dynamic(() => import('@/app/_components/contact'));

const Home = () => {
  return (
    <div className="flex flex-col gap-[6rem]">
      <WorkHero />
      <Contact />
    </div>
  );
};

export default Home;
