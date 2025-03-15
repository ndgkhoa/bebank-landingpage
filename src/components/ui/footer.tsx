import Link from 'next/link';
import { memo } from 'react';

import BackTopButton from '~/components/buttons/back-top-button';

const Footer = memo(() => {
  return (
    <footer className="flex justify-between pt-[8rem] pb-[3rem]">
      <p>All Rights Reserved © 2020</p>
      <Link href="https://www.exoape.com/">Alitwotimes x Exo Ape</Link>
      <BackTopButton />
    </footer>
  );
});

export default Footer;
