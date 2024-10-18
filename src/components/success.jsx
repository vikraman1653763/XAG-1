import React from 'react';
import '../style/success.css';
import tick from "/assets/tick.webp"
function FormSuccess() {




  return (
    <div className="dealer-form-success">
      <img src={tick} className='success-tick'/>
      <div>

      <h2 className='success-thank1'>Thank you for reaching out 😊</h2>
      <h2 className='success-thank2'>Your Form has been Submitted Successfully!</h2>
      <button  className="dealer-back-button">
      <a href='/'> Return Home </a>
      </button>
      </div>
    </div>
  );
}

export default FormSuccess;
