import { memo } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/components/ui/container';

export const ContactTable = () => (
  <Accordion type="single" collapsible className="w-3/4">
    {Array(4)
      .fill(null)
      .map((_, index) => (
        <AccordionItem key={index} value={index + ''}>
          <AccordionTrigger>United Kingdom</AccordionTrigger>
          <AccordionContent>
            <div className="flex">
              <div className="w-1/4" />
              <div className="w-3/4 space-y-1.5">
                <p>Arts & Sciences</p>
                <p>
                  Suite 2, 25-26 Dering Street, Mayfair London W1S 1AT +44 (0) 786 797 1545
                  james@artsandsciences.com
                </p>
                <p>uk.artsandsciences.com</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
  </Accordion>
);

const Contact = memo(() => {
  return (
    <Container contentName="CONTACT" title="Get one touch">
      <div>
        <p className="w-1/2 text-[4rem] tracking-tighter">
          I'M NOTORIOUSLY SLOW AT GETTING BACK TO EMAILS
        </p>
        <p className="text-xl">In a hurry? please contact my awesome producers</p>
      </div>
      <ContactTable />
    </Container>
  );
});

export default Contact;
