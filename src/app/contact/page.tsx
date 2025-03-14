import dynamic from 'next/dynamic';

const HeroContact = dynamic(() => import('@/app/contact/_components/hero-contact'));
const ContactInfo = dynamic(() => import('@/app/contact/_components/contact-info'));

const Contact = () => {
  return (
    <div className="space-y-[6rem]">
      <HeroContact />
      <ContactInfo />
    </div>
  );
};

export default Contact;
