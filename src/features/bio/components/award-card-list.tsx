import { useMemo } from 'react';

import { MediaCard } from '~/components/ui/media-card';

const AwardCardList = () => {
  const item = useMemo(() => {
    return {
      imageUrl: '/images/clio.jpg',
      imageName: 'Clio',
      isNameCenter: true,
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 pl-[5rem]">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="w-1/3">
            <MediaCard item={item} />
          </div>
        ))}
    </div>
  );
};

export default AwardCardList;
