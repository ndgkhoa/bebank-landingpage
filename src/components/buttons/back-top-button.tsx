import { ArrowUp } from 'lucide-react';

import { Button } from '~/components/ui/button';

const BackTopButton = () => {
  return (
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
  );
};

export default BackTopButton;
