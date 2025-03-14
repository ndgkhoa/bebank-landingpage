import { memo } from 'react';

import Container from '@/components/ui/container';
import AwardCardList from '@/app/bio/_components/award-card-list';
import AwardTable from '@/app/bio/_components/award-table';

const AwardsRecognitions = memo(() => {
  return (
    <Container
      contentName="AWARDS & RECOGNITIONS"
      title="“ALI WAS AWARDED THE COVETED D&AD YELLOW PENCIL FOR DIRECTION IN 2015.”"
      titleStyle="text-[4rem] font-semibold"
    >
      <AwardCardList />
      <AwardTable/>
    </Container>
  );
});

export default AwardsRecognitions;
