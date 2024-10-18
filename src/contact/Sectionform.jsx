import React,{useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate}from 'react-router-dom';


const SectionForm = () => {
  const navigate = useNavigate();


  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);


const handleSubmit = async (e)=>{
  e.preventDefault()
  setIsSubmitting(true);
  const enquiryData={companyName,email,phoneNumber,message}

  const response = await fetch('/api/enquiry', { 
    method: 'POST',
    body: JSON.stringify(enquiryData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const json = await response.json()

  if(!response.ok){
    setError(json.error)
  }
  if(response.ok){
    
    setError(null)
    navigate('/success')
    setIsSubmitting(false)
  }
}

  return (
    <section className="contact_form">
      <div className="contact_form-heading">
        <h1>Contact us:)</h1>
        <h6>
          Kindly submit your details and share your message to us, thank you
        </h6>
      </div>

      <div className="contact_form-content">



      <form className="contact_form-left"
       onSubmit={handleSubmit}
      style={{ cursor: isSubmitting ? 'wait' : 'auto' }} >
          <div>
            <label htmlFor="companyname">Company name</label>
            <input
              type="text"
              name="companyname"
              id="companyname"
              value={companyName}
              disabled={isSubmitting}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="email-phone-div">
            <div className="email-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                disabled={isSubmitting}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="phone-div">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}</button>
          {error && <div className="error">{error}</div>}
        </form>
















        
        <div className="contact_form-right" data-aos="fade-up">
          <div className="email-right">
            <div className="contact_form-right_img-div">
              <img src="/assets/Email.webp" alt="" />
            </div>
            <h4>Email</h4>
            <p>we are excited to reach you</p>
            <a href="mailto:info@xagrotortek.in">info@xagrotortek.in</a>
            <a href="mailto:hr@xagrotortek.in">hr@xagrotortek.in</a>
          </div>
          <div className="moblie-right" >
            <div className="contact_form-right_img-div">
              <img src="/assets/Phone.webp" alt="" />
            </div>
            <h4>Mobile</h4>
            <p>+919381028379</p>
          </div>
          <div className="location-right" >
            <div className="contact_form-right_img-div">
              <img src="/assets/Pin.webp" alt="" />
            </div>
            <h4>Corporate office</h4>
            <p>Xagrotor tek private limited, Atal Incubation Centre (AIC)- Pondicherry Engineering College Foundation ,Pondicherry Engineering College Campus, Pillaichavady, Puducherry 605014</p>
            <a href="https://www.google.com/maps?cid=17323452363467487557" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </div>
          <div className="location-right"  >
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
