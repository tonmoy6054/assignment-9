import React, { useState, useEffect } from 'react';

const JobCard = () => {
  
      const [catagories, setCatagories] = useState([]);
      useEffect(() => {
          fetch('/public/catagory.json')
            .then(response => response.json())
            .then(data => setCatagories(data.catagories));
        }, []);


  return (
    <div>
      
    </div>
  );
};

export default JobCard;