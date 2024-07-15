import React from 'react';
import '../style/contact.css';



import Section1 from '../contact/Section1';
import Enquiry from '../contact/Enquiry';
import SectionForm from '../contact/Sectionform';
function Contact() {
  return (
    <div>
      <Section1/>
      <Enquiry />
      <SectionForm />
     
    </div>
  );
}

export default Contact;
