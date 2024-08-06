import React from 'react';

const BatteryBanner = () => {
  return (
    <section className="battery-banner" style={{ marginTop: '0px' }}>
      <img src="/assets/banner.webp" alt="banner" />
      <div className="battery-image-text">
        <h3 className='battery-banner-heading'>Explore our <br /> <span>Battery Solutions!</span></h3>
        <p>Discover our range of high-performance, customized batteries designed to meet diverse agricultural needs, ensuring reliability and efficiency in various conditions.</p>
      </div>
    </section>
  );
};

export default BatteryBanner;
