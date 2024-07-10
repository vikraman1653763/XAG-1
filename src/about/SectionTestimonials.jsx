import React, { useEffect, useState } from 'react';

const SectionTestimonials = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    showComments(textIndex);
  }, [textIndex]);

  const nextComment = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const currentSlide = (n) => {
    setTextIndex(n - 1);
  };

  const showComments = (index) => {
    const comments = document.querySelectorAll('.ab-comments');
    const profiles = document.querySelectorAll('.ab-profile');

    comments.forEach((comment, idx) => {
      comment.style.display = idx === index ? 'block' : 'none';
    });

    profiles.forEach((profile, idx) => {
      profile.classList.toggle('current', idx === index);
    });
  };

  return (
    <section id="sec-6">
      <div className="background-div">
        <div className="main-textimonial">
          <h3>what they say <span>about us</span></h3>
          <div className="ab-textimonial">
            <div className="ab-textimonial-container">
              <div className="ab-comments ab-effect">
                <p>"Xagrotor Tek's drones have transformed my farming practice. The ease of use and precision have made managing my crops more efficient and less labor-intensive. The technology has also helped me reduce pesticide use, which is great for both the environment and my bottom line. Their support team is incredibly responsive and knowledgeable."</p>
                <h2>- Sanjana Patel, Organic Farmer</h2>
              </div>
              <div className="ab-comments ab-effect">
                <p>"Since integrating Xagrotor Tek's drone technology into our operations, we've seen a remarkable improvement in crop health and yield. The data-driven insights provided by the drones allow us to make more informed decisions, leading to better resource management and cost savings. The company's commitment to sustainability aligns perfectly with our values."</p>
                <h2>- Vikram Singh, Agribusiness Owner</h2>
              </div>
              <div className="ab-comments ab-effect">
                <p>"Xagrotor Tek's agricultural drones have been a game-changer for us. The precision and efficiency of the drones have significantly improved our crop monitoring and management. We've been able to detect and address issues early, preventing potential losses. The team at Xagrotor Tek is always helpful and provides excellent support."</p>
                <h2>- Anita Desai, Vineyard Manager</h2>
              </div>
              <div className="ab-comments ab-effect">
                <p>"Using Xagrotor Tek's drones has streamlined our farming processes. The real-time data and aerial views have given us new perspectives on our fields, helping us to optimize planting and irrigation strategies. The technology is user-friendly, and the customer service is top-notch. We've never been more efficient."</p>
                <h2>- Ramesh Gupta, Rice Farmer</h2>
              </div>
              <div className="ab-comments ab-effect">
                <p>"The impact of Xagrotor Tek's drone technology on our farm has been profound. We've experienced a notable increase in efficiency and productivity. The drones' ability to cover large areas quickly and provide detailed analysis has saved us time and money. Xagrotor Tek's commitment to innovation and sustainability makes them a trusted partner in our agricultural journey."</p>
                <h2>- Priya Nair, Coffee Plantation Owner</h2>
              </div>
            </div>
            <div className="ab-profiles">
              <div className="ab-profile" onClick={() => currentSlide(1)}>
                <img src="/assets/mini.webp" alt="profile 1" />
              </div>
              <div className="ab-profile" onClick={() => currentSlide(2)}>
                <img src="/assets/mini.webp" alt="profile 2" />
              </div>
              <div className="ab-profile" onClick={() => currentSlide(3)}>
                <img src="/assets/mini.webp" alt="profile 3" />
              </div>
              <div className="ab-profile" onClick={() => currentSlide(4)}>
                <img src="/assets/mini.webp" alt="profile 4" />
              </div>
              <div className="ab-profile" onClick={() => currentSlide(5)}>
                <img src="/assets/mini.webp" alt="profile 5" />
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default SectionTestimonials;
