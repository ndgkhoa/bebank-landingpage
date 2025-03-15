import { memo } from 'react';

const InfoList = memo(() => {
  return (
    <ul className="underline">
      <li>Mail</li>
      <li>Vimeo</li>
      <li>Instagram</li>
    </ul>
  );
});

export default InfoList;
