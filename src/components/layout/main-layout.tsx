import { ReactNode } from 'react';

import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
