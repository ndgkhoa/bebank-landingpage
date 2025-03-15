import { useMemo } from 'react';

import Container from '~/components/ui/container';
import { MediaCard } from '~/components/ui/media-card';

const Roots = () => {
  const item = useMemo(() => {
    return {
      imageUrl: '/images/family.jpg',
      imageName: 'Salma, Sina and Ali - Athens / GR',
      rightImageText:
        'Born in Cairo, and raised all over the world, his work is attentive to local realities, combined with a global sense for storytelling and a sick sense of humor.',
    };
  }, []);

  return (
    <Container
      contentName="ROOTS"
      title="Raised all over the World"
      titleStyle="text-[12rem] font-semibold leading-none"
    >
      <div className="flex gap-[8rem]">
        <div className="font-semibold">
          <p>N 30.048819°</p>
          <p>E 31.243666°</p>
        </div>
        <MediaCard item={item} />
      </div>
    </Container>
  );
};

export default Roots;
