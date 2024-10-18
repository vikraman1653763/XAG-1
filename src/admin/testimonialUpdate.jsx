import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { TiArrowLeftThick } from "react-icons/ti";

import { serverUrl } from '../constant';
function TestimonialUpdate(){

     
    const [name,setName]=useState("");
    const[feedback,setFeedback]=useState('');
    const[error,setError]=useState(null);
    const[message,setMessage]=useState(null);
    const[isSubmitting,setIsSubmitting]=useState(false);
    const navigate= useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const currentDate = new Date();
        const utcOffset = currentDate.getTimezoneOffset() * 60000; 
        const istDate = new Date(currentDate.getTime() + utcOffset + (5.5 * 3600000)); 
        const formattedDate = istDate.getFullYear() + '-' +
                              String(istDate.getMonth() + 1).padStart(2, '0') + '-' +
                              String(istDate.getDate()).padStart(2, '0') + ' ' +
                              String(istDate.getHours()).padStart(2, '0') + ':' +
                              String(istDate.getMinutes()).padStart(2, '0') + ':' +
                              String(istDate.getSeconds()).padStart(2, '0');
    
        const TestimonialData = {
            name: name,
            feedback: feedback,
            date: formattedDate
        };
    
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${serverUrl}/api/testimonial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(TestimonialData)
            });
    
            if (response.status === 401 || response.status === 403) {
                console.log("Unauthorized or forbidden, redirecting to login");
                localStorage.removeItem('token');
                navigate('/login');
                return;
            }
    
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
                setError(null);
                setFeedback('');
                setName('');
            } else {
                console.error("Error response:", data);
                setError(data.error);
                setTimeout(() => setError(null), 5000);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            setError("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleBack = () => {
        navigate('/admin/testimonial');
      };
    return (
        <div className="admin-form blog-form">
          <button type="button" onClick={handleBack} className="back-button">
            <TiArrowLeftThick /> Back   
          </button>
          {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}
            {message && (
              <div className="alert alert-success">
                {message}
              </div>
            )}
            
          <form onSubmit={handleSubmit} style={{ cursor: isSubmitting ? 'wait' : 'auto' }}>
            
            <label htmlFor="name">
              <span>Name:</span>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            
            
    
            <label htmlFor="feedback">
              <span>Feedback:</span>
              <textarea
                name="feedback"
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </label>
            
            
    
            <div className='submit-button-container'>
              <input className="admin-submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
}
export default TestimonialUpdate;