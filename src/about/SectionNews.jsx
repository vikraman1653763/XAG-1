import React from 'react';

const SectionNews = () => {
  return (
    <section id="sec-news">
      <div className="news-container">
        <div className="left-sec">
          <div className="head">
            <h3><span>new</span> news &<br />events</h3>
            <p>You can read all our news and latest updates here about our work</p>
          </div>
          <div className="recent-news">
            <div className="img-container">
              <img src="/assets/blog1.webp" alt="news-1" />
            </div>
            <div className="category">Category</div>
            <h4>The Role of Drones in Indian Agriculture</h4>
            <p className="news-desc">Agricultural drones are revolutionizing precision farming in India by providing detailed aerial imagery that helps farmers identify and address issues early.</p>
            <a href="#">Read more </a>
          </div>
          <div className="news-2 news">
            <div className="img-container">
              <img src="/assets/blog2.webp" alt="news-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Crop Monitoring with Drone</h4>
              <p className="news-desc">Drones equipped with advanced sensors allow Indian farmers to monitor crop health in real time.</p>
              <a href="#">Read more </a>
            </div>
          </div>
        </div>
        <div className="right-sec">
          <div className="news-3 news">
            <div className="img-container">
              <img src="/assets/blog3.webp" alt="news-3" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Reducing Costs with Drones</h4>
              <p className="news-desc">Farmers reduce operational costs while boosting crop efficiency.</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="news-4 news">
            <div className="img-container">
              <img src="/assets/blog4.webp" alt="news-4" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Government Supporting Drone</h4>
              <p className="news-desc">adoption of drone technology in agriculture, helping farmers modernize their practices.</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="news-5 news">
            <div className="img-container">
              <img src="/assets/blog5.webp" alt="news-5" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Low Costs and High Efficiency</h4>
              <p className="news-desc">Optimizing the use of resources such as water, fertilizers, etc.</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="news-6 news">
            <div className="img-container">
              <img src="/assets/blog6.webp" alt="news-6" />
              
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Farmers Benefiting from Drones</h4>
              <p className="news-desc">From Punjab to Maharashtra, farmers are experiencing significant benefits from using drones.</p>
              <a href="#">Read more </a>
            </div>
          </div>
        </div>
      </div>
      <button>view more</button>
    </section>
  );
};

export default SectionNews;
