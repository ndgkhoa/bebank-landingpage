import Image from 'next/image';

import Container from '~/components/ui/container';

const SelectedWork = () => {
  return (
    <Container contentName="SELECTED WORK">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2">
          <Image
            src="/images/dragonball.jpg"
            alt="dragonball"
            width={600}
            height={300}
            loading="lazy"
          />
        </div>
        <div className="col-span-2">
          <Image src="/images/panda.jpg" alt="panda" width={400} height={200} loading="lazy" />
        </div>
        <div />
        <div className="col-span-3">
          <Image src="/images/shark.jpg" alt="shark" width={800} height={300} loading="lazy" />
        </div>

        <div className="col-span-2">
          <Image
            src="/images/dragonball.jpg"
            alt="dragonball"
            width={600}
            height={300}
            loading="lazy"
          />
        </div>
        <div className="col-span-2">
          <Image src="/images/panda.jpg" alt="panda" width={400} height={200} loading="lazy" />
        </div>
        <div />
        <div className="col-span-3">
          <Image src="/images/shark.jpg" alt="shark" width={800} height={300} loading="lazy" />
        </div>
      </div>
    </Container>
  );
};

export default SelectedWork;
