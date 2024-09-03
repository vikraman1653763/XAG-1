import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
import { LiaSpinnerSolid } from "react-icons/lia";

function BlogUpdate() {
  const [title, setTitle] = useState('');
  const [smallDesc, setSmallDesc] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const currentDate = new Date();
    const offset = 5.5 * 60 * 60 * 1000; 
    const istDate = new Date(currentDate.getTime() + offset);
    const formattedDate = istDate.toISOString().split('T')[0];

    const blogData = new FormData();  
    blogData.append('title', title);
    blogData.append('smallDesc', smallDesc);
    blogData.append('details', details);
    blogData.append('image', image);  
    blogData.append('date', formattedDate);

    const response = await fetch('http://localhost:8080/api/blog', {
      method: 'POST',
      body: blogData,  
    });

    const data = await response.json();
    try{
      if(response.ok){
        setMsg(data.message);
        setError(null);
        setTimeout(() => {
          setMsg(null);
          navigate('/admin/blogs/new');
        }, 3000);
        setTitle('');
        setSmallDesc('');
        setDetails('');
        setImage('');
      }else{
        console.error("error response:",data)
        setError(data.error);
        setTimeout(() => setError(null), 5000);
        navigate('/admin/blogs/new');
      }
    }finally{
      setLoading(false);
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
         {loading && (
      <div className="loading-spinner">
        <LiaSpinnerSolid className="spinner-icon" />
        <p>Uploading data, please wait...</p>
      </div>
    )}
      <form onSubmit={handleSubmit}>
        
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
