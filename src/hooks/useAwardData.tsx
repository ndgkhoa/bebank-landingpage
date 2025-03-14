const useAwardData = () => {
  const awardData = [
    {
      competition: 'The One Show',
      prize: 'Gold',
      project: 'Diesel / Be a Follower',
    },
    {
      competition: 'Cannes Lion',
      prize: 'Grand Prix',
      project: 'Nike / Just Do It',
    },
    {
      competition: 'D&AD Awards',
      prize: 'Black Pencil',
      project: 'Apple / Think Different',
    },
    {
      competition: 'Clio Awards',
      prize: 'Silver',
      project: 'Coca-Cola / Open Happiness',
    },
    {
      competition: 'Webby Awards',
      prize: 'People’s Voice',
      project: 'Spotify / Wrapped',
    },
  ];

  return { data: awardData };
};

export default useAwardData;
