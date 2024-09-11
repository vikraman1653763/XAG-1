import React from 'react';

const Section7 = () => {
  return (
    <div className="dealer-sec-7">
      <h2>Why You Should Order Now</h2>
      <p>
        Becoming a dealer with Xagrotor Tek means accessing exclusive benefits and limited-time offers that will help you stand out in your market. Here’s why you should act fast
      </p>
      <ul className="order-now-list">
        <li className="order-now-item itemdeal-1">
          <div className="overlay">
            <strong>Territorial Exclusivity</strong>
            Early orders guarantee you exclusive rights to represent Xagrotor Tek in your region. Don’t miss out on securing your territory.
          </div>
        </li>
        <li className="order-now-item itemdeal-2">
          <div className="overlay">
            <strong>Exclusive Savings</strong>
            For a limited time, we are offering special discounts on our dealership starter packages. Save big on your initial investment.
          </div>
        </li>
        <li className="order-now-item itemdeal-3">
          <div className="overlay">
            <strong>Priority Support</strong>
            Dealers who sign up now will receive priority technical and sales support, ensuring your success from the beginning.
          </div>
        </li>
        <li className="order-now-item itemdeal-4">
          <div className="overlay">
            <strong>Innovative Products</strong>
            Gain early access to our upcoming products and updates, putting you ahead of your competitors.
          </div>
        </li>
        <li className="order-now-item itemdeal-5">
          <div className="overlay">
            <strong>Adaptive Funding</strong>
            We offer flexible financing solutions for new dealers, allowing you to start with minimal upfront investment.
          </div>
        </li>
        <li className="order-now-item itemdeal-6"> {/* New Point Added */}
          <div className="overlay">
            <strong>Targeted Promotion</strong>
            Our team provides tailored marketing resources to help you effectively promote Xagrotor Tek products in your region.
          </div>
        </li>
      </ul>
      <p className="order-cta">
        Take advantage of this opportunity and start your dealership journey with Xagrotor Tek today. <strong>Submit your order now</strong> to secure your position and enjoy these exclusive benefits.
      </p>
    </div>
  );
};

export default Section7;
