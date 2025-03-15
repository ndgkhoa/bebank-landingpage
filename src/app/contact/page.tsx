import dynamic from 'next/dynamic';

import PageLayout from '~/components/layout/page-layout';
const HeroContact = dynamic(() => import('~/features/contact/components/hero-contact'));
const ContactInfo = dynamic(() => import('~/features/contact/components/contact-info'));

const Contact = () => {
  return (
    <PageLayout>
      <HeroContact />
      <ContactInfo />
    </PageLayout>
  );
};

export default Contact;
