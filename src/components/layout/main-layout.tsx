'use client';

import { memo, ReactNode } from 'react';

import Navbar from '~/components/ui/navbar';
import Footer from '~/components/ui/footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const MainContent = memo(() => <main>{children}</main>);

  return (
    <section className="min-h-screen px-24">
      <Navbar />
      <MainContent />
      <Footer />
    </section>
  );
};

export default MainLayout;
