import React from 'react';

const FilterSection = ({ selectedType, handleTypeChange, selectedLocation, handleLocationChange, selectedExperience, handleExperienceChange }) => {
    return (
        <div className="filter-section" data-aos="fade-right">
            <h4>Filter Jobs</h4>
            <div className="filter-group">
                <h5>Job Type</h5>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-fulltime"
                        type="checkbox"
                        checked={selectedType.includes('Full-time')}
                        onChange={() => handleTypeChange('Full-time')}
                    />
                    <label htmlFor="_checkbox-fulltime">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Full-time</span>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-parttime"
                        type="checkbox"
                        checked={selectedType.includes('Part-time')}
                        onChange={() => handleTypeChange('Part-time')}
                    />
                    <label htmlFor="_checkbox-parttime">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Part-time</span>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-remote"
                        type="checkbox"
                        checked={selectedType.includes('Remote')}
                        onChange={() => handleTypeChange('Remote')}
                    />
                    <label htmlFor="_checkbox-remote">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Remote</span>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-freelance"
                        type="checkbox"
                        checked={selectedType.includes('Freelance')}
                        onChange={() => handleTypeChange('Freelance')}
                    />
                    <label htmlFor="_checkbox-freelance">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Freelance</span>
                </div>
            </div>

            <div className="filter-group">
                <h5>Location</h5>
                <select className='filter-opt' value={selectedLocation} onChange={handleLocationChange}>
                    <option value="All">All</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Offsite">Offsite</option>
                </select>
            </div>
            <div className="filter-group">
                <h5>Experience</h5>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-entry"
                        type="checkbox"
                        checked={selectedExperience.includes('Entry-Level')}
                        onChange={() => handleExperienceChange('Entry-Level')}
                    />
                    <label htmlFor="_checkbox-entry">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Entry-Level</span>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-mid"
                        type="checkbox"
                        checked={selectedExperience.includes('Mid-Level')}
                        onChange={() => handleExperienceChange('Mid-Level')}
                    />
                    <label htmlFor="_checkbox-mid">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Mid-Level</span>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        id="_checkbox-senior"
                        type="checkbox"
                        checked={selectedExperience.includes('Senior-Level')}
                        onChange={() => handleExperienceChange('Senior-Level')}
                    />
                    <label htmlFor="_checkbox-senior">
                        <div className="tick_mark"></div>
                    </label>
                        <span>Senior-Level</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
