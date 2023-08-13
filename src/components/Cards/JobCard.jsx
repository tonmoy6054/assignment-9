import React, { useState, useEffect } from 'react';
import './JobCard.css'; 

const JobCard = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch('/catagory.json')
      .then(response => response.json())
      .then(data => setCatagories(data.catagories));
  }, []);

  return (
    <div className='job-card-container'>
      <h1 className='job-card-title'>Explore Job Categories</h1>
      <p className='job-card-description'>
        Browse through a variety of job categories to find your ideal career path.
      </p>
      <div className='job-catagories'>
        {catagories.map(catagory => (
          <div className='catagory-card' key={catagory.id}>
            <img className='catagory-logo' src={catagory.logo} alt={catagory.title} />
            <h4 className='catagory-title'>{catagory.title}</h4>
            <p className='catagory-jobs'>{catagory.jobs} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
