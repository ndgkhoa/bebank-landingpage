import sampleSize from 'lodash/sampleSize';

import Container from '~/components/ui/container';
import { MediaCard } from '~/components/ui/media-card';
import useImageList from '~/features/home/hooks/use-media-list';

const ViralCampaign = () => {
  const { data } = useImageList();
  const randomImages = sampleSize(data, 2);

  return (
    <Container
      contentName="VIRAL CAMPAIGN"
      title="90 million"
      titleStyle="text-[14rem] font-bold leading-none"
    >
      <div>
        <p className="w-[40rem] text-5xl font-semibold">
          “ONE OF THE MOST WATCHED CAMPAIGNS OF ALL TIME”
        </p>
        <p>NEVER SAY NO TO PANDA</p>
      </div>
      {randomImages.map((item) => (
        <MediaCard key={item.imageName} item={item} />
      ))}
    </Container>
  );
};

export default ViralCampaign;
