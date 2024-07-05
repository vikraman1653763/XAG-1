import React from 'react';

const SectionNews = () => {
  return (
    <section id="sec-news">
      <div className="blog-container">
        <div className="left-sec">
          <div className="head">
            <h3><span>new</span> news &<br />events</h3>
            <p>You can read all our blogs and latest news here about our Work</p>
          </div>
          <div className="recent-blog">
            <div className="img-container">
              <img src="/assets/blog1.webp" alt="blog-1" />
            </div>
            <div className="category">Category</div>
            <h4>The Role of Drones in Indian Agriculture</h4>
            <p className="blog-desc">Agricultural drones are revolutionizing precision farming in India by providing detailed aerial imagery that helps farmers identify and address issues early.</p>
            <a href="#">Read more </a>
          </div>
          <div className="blog-2 blog">
            <div className="img-container">
              <img src="/assets/blog2.webp" alt="blog-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Crop Monitoring with Drone</h4>
              <p className="blog-desc">Drones equipped with advanced sensors allow Indian farmers to monitor crop health in live today</p>
              <a href="#">Read more </a>
            </div>
          </div>
        </div>
        <div className="right-sec">
          <div className="blog-3 blog">
            <div className="img-container">
              <img src="/assets/blog3.webp" alt="blog-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Reducing Costs with Drones</h4>
              <p className="blog-desc">Farmers reduce operational costs while boosting crop efficiency.</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="blog-4 blog">
            <div className="img-container">
              <img src="/assets/blog4.webp" alt="blog-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Government Supporting Drone</h4>
              <p className="blog-desc">adoption of drone technology in agriculture, helping farmers modernize their practices.</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="blog-5 blog">
            <div className="img-container">
              <img src="/assets/blog5.webp" alt="blog-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Low Costs and High Efficiency</h4>
              <p className="blog-desc">optimizing the use of resources such as water, fertilizers.....</p>
              <a href="#">Read more </a>
            </div>
          </div>
          <div className="blog-6 blog">
            <div className="img-container">
              <img src="/assets/blog6.webp" alt="blog-2" />
            </div>
            <div className="content">
              <div className="info">
                <div className="category">Category</div>
                <p className="duration">5 min read</p>
              </div>
              <h4>Farmers Benefiting from Drones</h4>
              <p className="blog-desc">Punjab to Maharashtra, farmers are experiencing significant benefits from using drones</p>
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
