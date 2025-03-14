import { memo } from 'react';

import { ContactTable } from '@/app/_components/contact';
import Container from '@/components/ui/container';

const ContactInfo = memo(() => {
  return (
    <Container contentName="CONTACT INFO">
      <ContactTable />
    </Container>
  );
});

export default ContactInfo;
