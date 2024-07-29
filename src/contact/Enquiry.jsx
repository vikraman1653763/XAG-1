import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const enquiryData=[
  {
    "title": "For Sales",
    "description": "For any sales-related inquiries, including product information, pricing, and orders, please contact our sales team at sales@xagrotortek.in or call us at +91 9381028379.",
    "image": "/assets/choose5.webp"
  },
  {
    "title": "Help & services",
    "description": "If you require servicing or maintenance for your Xagrotor Tek products, please submit a service request through our online portal or email service@xagrotortek.in.",
    "image": "/assets/choose2.webp"
  },
  {
    "title": "Collaboration",
    "description": "Stay updated on our latest deals and special offers by subscribing to our newsletter or following us on social media. Don't miss out on exclusive discounts, promotions, and new product announcements!",
    "image": "/assets/choose3.webp"
  }
];


const Enquiry = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <section id="enquiry">
      <div className="enquiries-heading">
        <h3 className="enquiry-header">FOR <br /><span>enquiries</span></h3>
        <h6>In terms of Sales, Help & service, New Ideas & collaboration and for more
          requirements contact us</h6>
      </div>
      <div className="enquiry-card" data-aos="fade-up">
        {enquiryData.map((enquiry, index) => (
          <div key={index} className="enquiry-adv-card-bg">
           
            <div className="enquiry-adv-card">
              <div className="enquiry-adv-card-content">
                <div className="enquiry-image_background">
                  <img src={enquiry.image} alt={enquiry.title} />
                </div>
              </div>
              <div className="content-div">
                <h4>{enquiry.title}</h4>
                <p>{enquiry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enquiry;
