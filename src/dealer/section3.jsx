import React, { useState } from 'react';
import {useNavigate}from 'react-router-dom';
function Section3() {
 
  const [companyName,setCompanyName]=useState("")
  const[contactPerson,setContactPerson]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[product,setProduct]=useState("")
  const[orderVolume,setOrderVolume]=useState("")
  const[comments,setComments]=useState("")
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579

 const navigate = useNavigate();

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    setIsSubmitting(true);

    e.preventDefault();
    const dealerData={companyName,contactPerson,email,phone,product,orderVolume,comments}
    const response = await fetch('/api/dealer',{
=======
    e.preventDefault();
    const dealerData={companyName,contactPerson,email,phone,product,orderVolume,comments}
    const response = await fetch('http://localhost:8080/api/dealer',{
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
      method:'POST',
      body:JSON.stringify(dealerData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const json=await response.json()

   if(!response.ok){
    setError(json.error)
   }
   if(response.ok){
    setError(null)
<<<<<<< HEAD
    navigate('/success')
    setIsSubmitting(false)

=======
    console.log("good",json)
    navigate('/success')
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
   }
  };

  return (
    <div className="dealer-section3">
      <h2 className="dealer-section3-title">Request a Quote</h2>
<<<<<<< HEAD
      <form className="dealer-quote-form" onSubmit={handleSubmit} style={{ cursor: isSubmitting ? 'wait' : 'auto' }}>
=======
      <form className="dealer-quote-form" onSubmit={handleSubmit}>
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
        <div className="dealer-form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
<<<<<<< HEAD
            disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
          />
        </div>

        <div className="dealer-form-group">
          <label htmlFor="contactPerson">Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            required
<<<<<<< HEAD
            disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
          />
        </div>

        <div className="dealer-form-row">
          <div className="dealer-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
<<<<<<< HEAD
              disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
            />
          </div>

          <div className="dealer-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
<<<<<<< HEAD
              disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
            />
          </div>
        </div>

        <div className="dealer-form-row">
          <div className="dealer-form-group">
            <label htmlFor="productsOfInterest">Products of Interest</label>
            <input
              type="text"
              id="productsOfInterest"
              name="productsOfInterest"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
<<<<<<< HEAD
              disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
            />
          </div>

          <div className="dealer-form-group">
            <label htmlFor="orderVolume">Estimated Order Volume</label>
            <select
              id="orderVolume"
              name="orderVolume"
              value={orderVolume}
              onChange={(e) => setOrderVolume(e.target.value)}
              required
<<<<<<< HEAD
              disabled={isSubmitting}

=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
            >
              <option value="">Select Volume</option>
              <option value="0-100">0-100</option>
              <option value="100-500">100-500</option>
              <option value="500-1000">500-1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>
        </div>

        <div className="dealer-form-group">
          <label htmlFor="comments">Additional Comments or Questions</label>
          <textarea
            id="comments"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
<<<<<<< HEAD
            disabled={isSubmitting}

          ></textarea>
        </div>
        <div className='dealer-submit-container'>
        <button type="submit" className="dealer-submit-button"disabled={isSubmitting}
        >{isSubmitting ? "Sumbitting...":'Submit'}</button>
=======
          ></textarea>
        </div>
        <div className='dealer-submit-container'>
        <button type="submit" className="dealer-submit-button">Submit</button>
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
        {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default Section3;
