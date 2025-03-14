const useImageData = () => {
  const imageData = [
    {
      imageUrl: '/images/nature.jpg',
      imageName: 'American University - Cairo / EG',
      rightImageText:
        'It may not be obvious, but Ali studied computer engineering at the American University in Cairo, with a minor in painting. Preferring storyboards to motherboards, he quickly abandoned a mediocre programming career to study Design and Art Direction at the Miami Ad School.',
    },
    {
      imageUrl: '/images/school.jpg',
      imageName: 'Miami ad school - Miami / USA',
      leftImageText:
        'Ali spent a little over a year in Miami before moving to Romania as a Junior Art Director for D’Arcy Bucharest. He met some incredible people at the now-closed Agency, and they’re still friends to this day.',
    },
    {
      imageUrl: '/images/city.jpg',
      imageName: 'Shooting for Coca-Cola - Capetown / ZA',
      rightImageText:
        'From Romania Ali moved to Germany with Leagas Delaney, Hamburg. Where he worked under a great Art Director, Hermann Waterkamp. From there he went on to build a truly global career, first as Art Director then as Creative Director for the likes of Leo Burnett, JWT, McCann, before finally topping it off as ECD of DDB-Berlin in 2012.',
    },
    {
      imageUrl: '/images/dog.jpg',
      imageName: 'Ali and Maged in Elephant - Cairo / EG',
      leftImageText:
        'In 2010, he co-founded Elephant in Cairo with his lifetime creative partner and friend, Maged Nassar. Their humble two man shop quickly became the regions most awarded agency, picking up five Dubai Lynx Grand Prix in under two years.',
    },
    {
      imageUrl: '/images/friend.jpg',
      imageName: 'Independent Agency Showcase - Cannes / FR',
      leftImageText:
        'His directorial debut, “Never Say No to Panda” won him a Gold Lion in Cannes, and with over 90-million youtube views, was named by the Guardian as “one of the most watched viral campaigns of all time.”',
    },
  ];

  return { data: imageData };
};

export default useImageData;
