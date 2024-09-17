import React from 'react';
import DroneIcon1 from '/assets/drone8.svg';

import externalLink from '/assets/exlink.svg';

const cardData = [
  {
    id: 1,
    flipTitle: 'Small Category (7 days) ',
    description: 'Learn the basics of drone operation including safety protocols and basic flight maneuvers.',
    badge: 'Beginner',
    imgSrc: DroneIcon1,
    footer: 'Duration: 7 days',
    link: '#7days'
  },
  {
    id: 2,
    flipTitle: 'Medium Category (10 days)',
    description: 'Master advanced flight techniques and maneuvers for various drone models.',
    badge: 'Advanced',
    imgSrc: DroneIcon1,
    footer: 'Duration: 10 days',
    link: '#10days'
  }
  
];

const FlipCard = () => {
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
                <p>{card.description}</p>
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

export default FlipCard;
