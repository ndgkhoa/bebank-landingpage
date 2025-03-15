import Container from '~/components/ui/container';
import AwardCardList from '~/features/bio/components/award-card-list';
import AwardTable from '~/features/bio/components/award-table';

const AwardsRecognitions = () => {
  return (
    <Container
      contentName="AWARDS & RECOGNITIONS"
      title="“ALI WAS AWARDED THE COVETED D&AD YELLOW PENCIL FOR DIRECTION IN 2015.”"
      titleStyle="text-[4rem] font-semibold"
    >
      <AwardCardList />
      <AwardTable />
    </Container>
  );
};

export default AwardsRecognitions;
