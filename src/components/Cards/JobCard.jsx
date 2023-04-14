import React, { useState, useEffect } from 'react';
// import Catagory from '../Catagory';

const JobCard = () => {
  
      const [catagories, setCatagories] = useState([]);
      useEffect(() => {
          fetch('/public/catagory.json')
            .then(response => response.json())
            .then(data => setCatagories(data.catagories));
        }, []);


  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-10 ml-5 justify-center'>
      <h1 className='text-3xl font-bold mt-5'>Job Catagory List</h1>
      <p className='mt-10 mr-10 pr-10'>Here's some of the catagory of the job is given</p>
{catagories.map(catagory => (
       <li key={catagory.id}>
            <img className='w-10 h-9' src="{catagory.logo}"></img>
            <h4 className='text-2xl'>{catagory.title}</h4>
            <p>{catagory.jobs}</p>
            </li>
))}
    </div>

  );
};

export default JobCard;