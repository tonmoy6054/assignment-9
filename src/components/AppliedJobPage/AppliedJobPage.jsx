import React from 'react';
import AppliedJobPageCard from './AppliedJobPageCard';

const AppliedJobsPage = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

  return (
    <div>
      <h2>Your Applied Jobs</h2>
      <ul>
        {appliedJobs.map((job, index) => (
        //   <p key={index}>{job.title}</p>
        <AppliedJobPageCard
        key={index} job={job}
        ></AppliedJobPageCard>
        
       
    
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobsPage;
