import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SectionForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);
  return (
    <section className="contact_form">
      <div className="contact_form-heading">
        <h3>Contact us:)</h3>
        <h6>
          Kindly submit your details and share your message to us, thank you
        </h6>
      </div>
      <div className="contact_form-content">
        <div className="contact_form-left">
          <div>
            <label htmlFor="companyname">Company name</label>
            <input type="text" name="companyname" id="companyname" />
          </div>
          <div className="email-phone-div">
            <div className="email-div">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="phone-div">
              <label htmlFor="number">Phone Number</label>
              <input type="tel" name="phonenumber" id="phonenumber" />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Type your message..."></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>

        
        <div className="contact_form-right"data-aos="zoom-in-up">
          <div className="email-right">
            <div className="contact_form-right_img-div">
              <img src="/assets/Email.webp" alt="" />
            </div>
            <h4>Email</h4>
            <p>we are excited to reach you</p>
            <a href="mailto:info@xagrotortek.in">info@xagrotortek.in</a>
            <a href="mailto:hr@xagrotortek.in">hr@xagrotortek.in</a>
          </div>
          <div className="moblie-right"data-aos="zoom-in-up">
            <div className="contact_form-right_img-div">
              <img src="/assets/Phone.webp" alt="" />
            </div>
            <h4>Mobile</h4>
            <p>+919381028379</p>
          </div>
          <div className="location-right"data-aos="zoom-in-up">
            <div className="contact_form-right_img-div">
              <img src="/assets/Pin.webp" alt="" />
            </div>
            <h4>Corporate office</h4>
            <p>Xagrotor tek private limited, Atal Incubation Centre (AIC)- Pondicherry Engineering College Foundation ,Pondicherry Engineering College Campus, Pillaichavady, Puducherry 605014</p>
            <a href="https://www.google.com/maps?cid=17323452363467487557" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </div>
          <div className="location-right" data-aos="zoom-in-up">
            <div className="contact_form-right_img-div">
              <img src="/assets/Pin.webp" alt="" />
            </div>
            <h4>Factory Address</h4>
            <p>Xagrotor tek private limited, Vanur Taluk Office, AR Nivas, Navayuga Nagar, Post, Auroville, Pattanur, Tamil Nadu 605101</p>
            <a href="https://www.google.com/maps?cid=17323452363467487557" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
