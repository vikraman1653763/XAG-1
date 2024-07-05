import React from 'react';

const SectionMission = () => {
  return (
    <section className="mission">
      <div className="head">
        <h2 className="heading">What <br />Our</h2>
        <div className="misson-texteffect">
          <h2>MISSION?</h2>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <h2>#1</h2>
          <h3><u>“Empowerment of Farmers</u></h3>
          <p>Providing farmers with the tools and knowledge needed to optimize their crop management.</p>
        </div>
        <div className="card">
          <h2>#2</h2>
          <h3><u>“Precision Farming</u></h3>
          <p>Promoting techniques that use resources more efficiently and effectively, leading to better crop yields and reduced waste.</p>
        </div>
        <div className="card">
          <h2>#3</h2>
          <h3><u>“Customer Support</u></h3>
          <p>Delivering exceptional support to help farmers utilize new technologies effectively and to their fullest potential.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionMission;
