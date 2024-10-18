import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
import { LiaSpinnerSolid } from "react-icons/lia";
import { serverUrl } from '../constant';
function BlogUpdate() {
  const [title, setTitle] = useState('');
  const [smallDesc, setSmallDesc] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentDate = new Date();
    const utcOffset = currentDate.getTimezoneOffset() * 60000; // Offset in milliseconds
    const istDate = new Date(currentDate.getTime() + utcOffset + (5.5 * 3600000)); // Adjust for IST
    const formattedDate = istDate.getFullYear() + '-' +
                          String(istDate.getMonth() + 1).padStart(2, '0') + '-' +
                          String(istDate.getDate()).padStart(2, '0') + ' ' +
                          String(istDate.getHours()).padStart(2, '0') + ':' +
                          String(istDate.getMinutes()).padStart(2, '0') + ':' +
                          String(istDate.getSeconds()).padStart(2, '0');
  
    const blogData = new FormData();  
    blogData.append('title', title);
    blogData.append('smallDesc', smallDesc);
    blogData.append('details', details);
    blogData.append('image', image);  
    blogData.append('date', formattedDate);

    const token = localStorage.getItem('token');

    const response = await fetch(`${serverUrl}/api/blog`, {
      method: 'POST',
      body: blogData,  
      headers:{
         "Authorization": `Bearer ${token}`
      }
    });
if(response.status===401||response.status===403){
  console.log("unauthorized or forbidden. redirecting to login");
  localStorage.removeItem('token')
  navigate('/login');
  return;
}
    const data = await response.json();
    try{
      if(response.ok){
        setMsg(data.message);
        setError(null);
        setTimeout(() => {
          setMsg(null);
        }, 3000);
        setTitle('');
        setSmallDesc('');
        setDetails('');
        setImage('');
        if (fileInputRef.current) {
          fileInputRef.current.value = null; 
        }
        setIsSubmitting(false)

      }else{
        console.error("error response:",data)
        setError(data.error);
        setTimeout(() => setError(null), 5000);
        navigate('/admin/blogs/new');
      }
    }finally{
      setIsSubmitting(false)
    }

    
  };

  const handleBack = () => {
    navigate('/admin/blogs');
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
        {msg && (
          <div className="alert alert-success">
            {msg}
          </div>
        )}
        
      <form onSubmit={handleSubmit} style={{ cursor: isSubmitting ? 'wait' : 'auto' }}>
        
        <label htmlFor="title">
          <span>Title:</span>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        
        <label htmlFor="smallDesc">
          <span>Short Description:</span>
          <input
            type="text"
            name="smallDesc"
            id="smallDesc"
            value={smallDesc}
            onChange={(e) => setSmallDesc(e.target.value)}
            required
          />
        </label>

        <label htmlFor="details">
          <span>Details:</span>
          <textarea
            name="description"
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
        
        <label htmlFor="image">
          <span>Upload Image: </span>
          <input
            className='img-upload'
            type="file"
            name="image"
            id="image"
            ref={fileInputRef}
            onChange={handleImageUpload}
          /> 

        </label>

        <div className='submit-button-container'>
          <input className="admin-submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BlogUpdate;
