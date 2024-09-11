import React, { useState, useEffect } from 'react';
import '../style/Career.css';
import CareerBanner from '../career/careerbanner.jsx';
import FilterSection from '../career/FilterSection.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import bag from "/assets/bag.svg";
import { Link, useParams } from "react-router-dom";

const Career = () => {
    const { id } = useParams(); 

    const[items,setItems]=useState([])
    const[error,setError]= useState(null)

    const [selectedType, setSelectedType] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedExperience, setSelectedExperience] = useState([]);

    const handleTypeChange = (type) => {
        setSelectedType((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleExperienceChange = (experience) => {
        setSelectedExperience((prev) =>
            prev.includes(experience)
                ? prev.filter((exp) => exp !== experience)
                : [...prev, experience]
        );
    };
    const filteredJobs = items.filter((job) => {
        const typeMatch = selectedType.length === 0 || selectedType.some((type) =>
            job.jobType.toLowerCase().trim() === type.toLowerCase().trim()
        );
        const locationMatch = selectedLocation === 'All' || job.location.toLowerCase().trim() === selectedLocation.toLowerCase().trim();
        const experienceMatch = selectedExperience.length === 0 || selectedExperience.some((experience) =>
            job.experience.toLowerCase().trim() === experience.toLowerCase().trim()
        );
        return typeMatch && locationMatch && experienceMatch;
    });
    
    useEffect(() => {
        AOS.init({ 
            duration: 1250 ,
            disable:  window.innerWidth < 768,
            once: true
        });
    }, []);

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/careers`); 
                if (response.ok) {
                    const data = await response.json();
                    setItems(data);
                } else {
                    setError('Career not found');
                }
            } catch (error) {
                setError("Failed to fetch Career data");
            }
        };
        fetchCareer();
    }, [id]); 
    return (
        <>
            <CareerBanner />
            <section className="career-section" >
                {items.length>0 &&(

                    <FilterSection
                    selectedType={selectedType}
                    handleTypeChange={handleTypeChange}
                    selectedLocation={selectedLocation}
                    handleLocationChange={handleLocationChange}
                    selectedExperience={selectedExperience}
                    handleExperienceChange={handleExperienceChange}
                    />
                )}
              <div className="job-listings" data-aos="fade-up">
                    {filteredJobs && filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div className="job-card" key={index} >
                                <h3><img src={bag} alt="job-icon"/>{job.title}</h3>
                                <p>{job.description}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Type:</strong> {job.jobType}</p>
                                <p><strong>Experience:</strong> {job.experience}</p>
                                <p className='require'><strong>Requirements:</strong><br/>
                                    {job.requirements}
                                </p>
                                <div className='applydiv'> 
                                    <button type='button' className="apply-button"><Link to={job.linkedin}>Apply Now</Link></button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-jobs">
                            <h3>There are currently no openings available. Please check back later.</h3>
                        </div>
                    )}
                </div>
                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                    )}
            </section>
        </>
    );
};

export default Career;
