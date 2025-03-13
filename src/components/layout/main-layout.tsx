'use client';

import { ReactNode } from 'react';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-screen bg-[#fcf6f4] px-24">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
