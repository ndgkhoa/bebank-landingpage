import { memo } from 'react';

import Container from '@/components/ui/container';
import { MediaCard } from '@/app/bio/_components/media-card';
import useImageData from '@/hooks/useImageData';

const AboutAli = memo(() => {
  const { data } = useImageData();

  return (
    <Container contentName="ABOUT ALI">
      <MediaCard item={data[0]} />
      <MediaCard item={data[1]} />
      <MediaCard item={data[2]} />
      <div>
        <p className="w-[40rem] text-5xl font-semibold">
          “NAMED BY THE 2014 GUNN REPORT® AS ONE OF THE TOP TEN DIRECTORS IN THE WORLD.”
        </p>
        <p>GLOBAL MOVIE</p>
        <p>DIRECTOR RANK</p>
      </div>
      <MediaCard item={data[3]} />
    </Container>
  );
});

export default AboutAli;
