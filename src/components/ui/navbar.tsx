'use client';

import { memo } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Navbar = memo(() => {
  const { setTheme } = useTheme();

  return (
    <header className="pt-24">
      <nav>
        <ul className="flex justify-between">
          <li className="flex gap-4">
            <Link className="hover:underline" href="/bio" onClick={() => setTheme('dark')}>
              Bio
            </Link>
            <Link className="hover:underline" href="/" onClick={() => setTheme('light')}>
              Work
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/contract" onClick={() => setTheme('light')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Navbar;
