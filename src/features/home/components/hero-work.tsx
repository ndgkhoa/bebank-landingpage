import { Hero, HeroSection } from '~/components/ui/hero';

const HeroWork = () => {
  return (
    <Hero title="ali ali">
      <HeroSection>
        <p className="underline">alitwotimes~gmail.com</p>
        <div className="w-[2rem] leading-none">
          <p className="block text-[3rem] font-semibold">
            Directors Showreel 2024
            <span className="align-super text-2xl font-semibold">©</span>
          </p>
        </div>
      </HeroSection>

      <HeroSection className="text-right">
        <p className="text-[1.5rem] font-semibold">* (alitwotimes)</p>
        <p className="w-[15rem] leading-relaxed">
          Ali Ali is a commercials director from Cairo—Egypt and the founder of Good People.
        </p>
      </HeroSection>
    </Hero>
  );
};

export default HeroWork;
