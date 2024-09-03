import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
import { LiaSpinnerSolid } from "react-icons/lia";

function CareerUpdate() {
  const [title, setTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [requirements, setRequirements] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const currentDate = new Date();
    const offset = 5.5 * 60 * 60 * 1000; 
    const istDate = new Date(currentDate.getTime() + offset);
    const formattedDate = istDate.toISOString().split('T')[0];

    const careerData = {
      title,
      jobType,
      location,
      experience,
      requirements,
      linkedin,
      date: formattedDate,
    };
     console.log(careerData)
    const response = await fetch('http://localhost:8080/api/career', {
      method: 'POST',
      body:JSON.stringify(careerData),
      headers:{
        'Content-Type':'application/json'
      }

    });

    const data = await response.json();


try{
if(response.ok){
  setMsg(data.message)
  setError(null)
  setTimeout(()=>{
    setMsg(null)
    navigate("/admin/careers/new")
  },3000)
  setTitle('');
  setJobType('');
  setLocation('');
  setExperience('');
  setRequirements('');
  setLinkedin('');
}else{
  console.error("error response:",data)
  setError(data.error)
  setTimeout(() =>setError(null), 5000);
  navigate('/admin/careers/new')
}
}finally{
  setLoading(false);
}
  };
  const handleBack = () => {
    navigate('/admin/careers');
  };
  return (
    <div className="admin-form career-form">
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

        <label>
          <span>Job Type:</span>
          <div>
            <label className='job-radio'>
              Full-Time
              <input
                type="radio"
                name="jobType"
                value="full-time"
                onChange={(e) => setJobType(e.target.value)}
                required
              />
            </label>
            <label className='job-radio'>
              Part-Time
              <input
                type="radio"
                name="jobType"
                value="part-time"
                onChange={(e) => setJobType(e.target.value)}
              />
            </label>
            <label className='job-radio'>
              Remote
              <input
                type="radio"
                name="jobType"
                value="remote"
                onChange={(e) => setJobType(e.target.value)}
              />
            </label>
            <label className='job-radio'>
              Freelance
              <input
                type="radio"
                name="jobType"
                value="freelance"
                onChange={(e) => setJobType(e.target.value)}
              />
            </label>
            <label className='job-radio'>
              Internship
              <input
                type="radio"
                name="jobType"
                value="internship"
                onChange={(e) => setJobType(e.target.value)}
              />
            </label>
          </div>
        </label>

        <label>
          <span>Location:</span>
          <div>
            <label className='job-radio'>
              All
              <input
                type="radio"
                name="location"
                value="all"
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>
            <label className='job-radio'>
              Onsite
              <input
                type="radio"
                name="location"
                value="onsite"
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label className='job-radio'>
              Offsite
              <input
                type="radio"
                name="location"
                value="offsite"
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
          </div>
        </label>

        <label>
          <span>Experience Level:</span>
          <div>
            <label className='job-radio'>
              Entry Level
              <input
                type="radio"
                name="experience"
                value="entry-level"
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </label>
            <label className='job-radio'>
              Mid Level
              <input
                type="radio"
                name="experience"
                value="mid-level"
                onChange={(e) => setExperience(e.target.value)}
              />
            </label>
            <label className='job-radio'>
              Senior Level
              <input
                type="radio"
                name="experience"
                value="senior-level"
                onChange={(e) => setExperience(e.target.value)}
              />
            </label>
          </div>
        </label>

        <label htmlFor="requirements">
          <span>Requirements:</span>
          <textarea
            name="requirements"
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </label>

        <label htmlFor="linkedin">
          <span>LinkedIn Profile URL:</span>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://www.linkedin.com/in/your-profile"
          />
        </label>

        <div className="submit-button-container">
          <input className="admin-submit" type="submit" value="Submit" />
      
        </div>
      </form>
    </div>
  );
}

export default CareerUpdate;
