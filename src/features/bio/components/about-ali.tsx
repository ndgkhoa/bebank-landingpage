import Container from '~/components/ui/container';
import { MediaCard } from '~/components/ui/media-card';
import useImageList from '~/features/home/hooks/use-media-list';

const AboutAli = () => {
  const { data } = useImageList();

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
};

export default AboutAli;
