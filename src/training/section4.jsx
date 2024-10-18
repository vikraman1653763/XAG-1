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
        <h1>Enroll now</h1>
        <h6>
        Apply for our upcoming training sessions and become a certified drone pilot.
                </h6>
      </div>

      <div className="contact_form-content">



      <form className="contact_form-left"
       onSubmit={handleSubmit}
      style={{ cursor: isSubmitting ? 'wait' : 'auto' }} >
          <div>
            <label htmlFor="companyname">Name</label>
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
            <label htmlFor="message">Category</label>
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
















        
       
      </div>
    </section>
  );
};

export default SectionForm;
