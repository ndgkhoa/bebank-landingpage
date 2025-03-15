import { PropsWithChildren } from 'react';

import { ThemeProvider } from '~/providers/theme-provider';
import MainLayout from '~/components/layout/main-layout';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};

export default AppProvider;
