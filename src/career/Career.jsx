import React, { useState, useEffect } from 'react';
import '../style/Career.css';
import CareerBanner from './careerbanner.jsx';
import FilterSection from './FilterSection.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import bag from "/assets/bag.svg";
const jobListings = [
    {
        title: 'Software Engineer',
        location: 'Onsite',
        type: 'Full-time',
        experience: 'Mid-Level',
        description: 'We are looking for a skilled software engineer to join our team. Responsibilities include developing and maintaining web applications, collaborating with cross-functional teams, and ensuring the technical feasibility of UI/UX designs.',
        requirements: [
            'Bachelor’s degree in Computer Science or related field',
            'Proven experience as a Software Engineer',
            'Knowledge of web technologies (HTML, CSS, JavaScript)',
            'Familiarity with React.js is a plus'
        ]
    },
    {
        title: 'Drone Technician',
        location: 'Offsite',
        type: 'Full-time',
        experience: 'Entry-Level',
        description: 'We are looking for an experienced drone technician to join our team. Responsibilities include assembling, testing, and maintaining drones, troubleshooting technical issues, and ensuring compliance with safety regulations.',
        requirements: [
            'Diploma or degree in Electronics or related field',
            'Experience with drone technology and maintenance',
            'Ability to troubleshoot and repair drone components',
            'Strong attention to detail and safety protocols'
        ]
    },
    {
        title: 'Project Manager',
        location: 'Onsite',
        type: 'Full-time',
        experience: 'Senior-Level',
        description: 'We are seeking a seasoned project manager to oversee our various projects. Responsibilities include planning, executing, and finalizing projects according to deadlines and within budget.',
        requirements: [
            'Bachelor’s degree in Business or related field',
            'Proven experience as a Project Manager',
            'Strong leadership and organizational skills',
            'Excellent communication and interpersonal skills'
        ]
    },
    {
        title: 'Customer Support Specialist',
        location: 'Remote',
        type: 'Part-time',
        experience: 'Entry-Level',
        description: 'We are looking for a customer support specialist to handle customer inquiries and resolve issues. Responsibilities include responding to customer queries, providing information about products and services, and ensuring customer satisfaction.',
        requirements: [
            'High school diploma or equivalent',
            'Experience in customer support or related field',
            'Excellent communication and problem-solving skills',
            'Ability to work independently and remotely'
        ]
    },
    {
        title: 'Marketing Coordinator',
        location: 'Onsite',
        type: 'Full-time',
        experience: 'Mid-Level',
        description: 'We are looking for a creative marketing coordinator to assist in the planning and execution of marketing campaigns. Responsibilities include conducting market research, creating marketing materials, and coordinating events.',
        requirements: [
            'Bachelor’s degree in Marketing or related field',
            'Proven experience as a Marketing Coordinator',
            'Strong writing and content creation skills',
            'Familiarity with social media and digital marketing'
        ]
    }
];


const Career = () => {
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

    const filteredJobs = jobListings.filter((job) => {
        const typeMatch = selectedType.length === 0 || selectedType.includes(job.type);
        const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
        const experienceMatch =
            selectedExperience.length === 0 || selectedExperience.includes(job.experience);
        return typeMatch && locationMatch && experienceMatch;
    });
    useEffect(() => {
        AOS.init({ duration: 1250 });
        
}, []);
    return (
        <>
            <CareerBanner />
            <section className="career-section" >
                <FilterSection
                    selectedType={selectedType}
                    handleTypeChange={handleTypeChange}
                    selectedLocation={selectedLocation}
                    handleLocationChange={handleLocationChange}
                    selectedExperience={selectedExperience}
                    handleExperienceChange={handleExperienceChange}
                />
                <div className="job-listings" data-aos="fade-up">
                    {filteredJobs.map((job, index) => (
                        <div className="job-card" key={index} >
                            <h3><img src={bag}/>{job.title}</h3>
                            <p>{job.description}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Type:</strong> {job.type}</p>
                            <p><strong>Experience:</strong> {job.experience}</p>
                            <strong>Requirements:</strong>
                            <ul>
                                {job.requirements.map((req, reqIndex) => (
                                    <li key={reqIndex}>{req}</li>
                                ))}
                            </ul>
                            <div className='applydiv'> 

                            <button type='button'
                            className="apply-button">Apply Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Career;
