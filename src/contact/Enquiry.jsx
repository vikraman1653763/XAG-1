import React from 'react';

const Enquiry = () => {
  return (
    <section id="enquiry">
      <div className="enquiries-heading">
        <h3 className="enquiry-header">FOR <br /><span>enquiries</span></h3>
        <h6>In terms of Sales, Help & service, New Ideas & collaboration and for more
          requirements contact us</h6>
      </div>
      <div className="enquiry-card">
        <div className="adv-card-bg">
          <span className="green-border1"></span>
          <span className="green-border2"></span>
          <span className="black_background"></span>
          <span className="glass_effect"></span>
          <div className="adv-card">
            <div className="adv-card-content">
              <div className="image_background">
                <span id="img_bck"></span>
                <img src="/assets/choose5.webp" alt="Image" />
              </div>
            </div>
            <div className="content-div">
              <h4>For Sales</h4>
              <p>For any sales-related inquiries, including product information, pricing, and orders, please contact our sales team at sales@xagrotortek.in or call us at +91 9381028379.</p>
            </div>
          </div>
        </div>
        <div className="adv-card-bg">
          <span className="green-border1"></span>
          <span className="green-border2"></span>
          <span className="black_background"></span>
          <span className="glass_effect"></span>
          <div className="adv-card">
            <div className="adv-card-content">
              <div className="image_background">
                <span id="img_bck"></span>
                <img src="/assets/choose2.webp" alt="Image" />
              </div>
            </div>
            <div className="content-div">
              <h4>Help & services</h4>
              <p>If you require servicing or maintenance for your Xagrotor Tek products, please submit a service request through our online portal or email service@xagrotortek.in. </p>
            </div>
          </div>
        </div>
        <div className="adv-card-bg">
          <span className="green-border1"></span>
          <span className="green-border2"></span>
          <span className="black_background"></span>
          <span className="glass_effect"></span>
          <div className="adv-card">
            <div className="adv-card-content">
              <div className="image_background">
                <span id="img_bck"></span>
                <img src="/assets/choose3.webp" alt="Image" />
              </div>
            </div>
            <div className="content-div">
              <h4>New Ideas & Collaboration</h4>
              <p>Stay updated on our latest deals and special offers by subscribing to our newsletter or following us on social media. Don't miss out on exclusive discounts, promotions, and new product announcements!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
