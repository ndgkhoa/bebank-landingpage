import { ReactNode } from 'react';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-[6rem]">{children}</div>;
};

export default PageLayout;
