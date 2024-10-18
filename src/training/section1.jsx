import React from 'react';
import DroneIcon1 from '/assets/drone8.svg';

import externalLink from '/assets/exlink.svg';

const cardData = [
  {
    id: 1,
    flipTitle: 'Small Category',
    description1: `Duration: 7 Days`,
    description2: `Weight Limit: Up to 25 kg`,
    badge: 'Beginner',
    imgSrc: DroneIcon1,
    footer: 'Training Curriculum',
    link: '#7days'
  },
  {
    id: 2,
    flipTitle: 'Medium Category ',
    description1: `Duration: 10 Days`,
    description2: `Weight Limit: Up to 150 kg`,   
     badge: 'Advanced',
    imgSrc: DroneIcon1,
    footer: 'Training Curriculum',
    link: '#10days'
  }
  
];

const Section1 = () => {
  return (
    <div className='flip-container'>
      {cardData.map((card) => (
        <div className="flip-card" key={card.id}>
          <div className="flip-content">
            <div className="flip-back">
              <div className="flip-back-flip-content">
                <img className='flip-svg' src={card.imgSrc} alt={card.flipTitle} />
                <strong>{card.flipTitle}</strong>
              </div>
            </div>
            <div className="flip-front">
              <div className="flip-img">  
                
                <div className="flip-bottom">
                <p>{card.description1 }</p>
                <p>{card.description2}</p>
                </div>
              </div>
              <div className="flip-front-flip-content">
                <small className="flip-badge">{card.badge}</small>
                <div className="flip-desc">
                  <div className="flip-title">
                    <p className="flip-title">
                      <strong>{card.flipTitle}</strong>
                    </p>

                  </div>
                  <p className="flip-card-footer">
                    {card.footer}
                    <a href={card.link}>
                    <img src={externalLink}/>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section1;
