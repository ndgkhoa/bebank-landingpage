import Link from 'next/link';
import { memo } from 'react';

const Navbar = memo(() => {
  return (
    <header className="pt-24">
      <nav>
        <ul className="flex justify-between">
          <li className="flex gap-4">
            <Link className="hover:underline" href="/bio">
              Bio
            </Link>
            <Link className="hover:underline" href="/">
              Work
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/contract">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Navbar;
