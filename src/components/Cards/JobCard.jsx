import React, { useState, useEffect } from 'react';

const JobCard = () => {
  
      const [catagories, setCatagories] = useState([]);
      useEffect(() => {
          fetch('/public/catagory.json')
            .then(response => response.json())
            .then(data => setCatagories(data.catagories));
        }, []);


  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-5'>
{catagories.map(catagory => (
       <li key={catagory.id}>
            <img className='w-10 h-9' src="{catagory.logo}"></img>
            <h2 className='font-bold text-2xl'>{catagory.title}</h2>
            <p>{catagory.jobs}</p>
            </li>
))}
    </div>

  );
};

export default JobCard;