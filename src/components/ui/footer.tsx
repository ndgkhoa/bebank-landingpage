import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { memo } from 'react';

import { Button } from '@/components/ui/button';

const Footer = memo(() => {
  return (
    <footer className="flex justify-between py-12">
      <p>All Rights Reserved © 2020</p>
      <Link href="https://www.exoape.com/">Alitwotimes x Exo Ape</Link>
      <Button
        variant="ghost"
        className="cursor-pointer"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <ArrowUp /> Back to top
      </Button>
    </footer>
  );
});

export default Footer;
