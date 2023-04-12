import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Catagory = () => {
const [jobs, setJobs] = useState([]);
useEffect(() => {

axios.get('/public/Jobs.json')
.then(data => {
const loadedTwoData = data.data;
// console.log(loadedTwoData);
const jobsData = loadedTwoData.map(job =>{
    const jobInfo = {
        image: job.logo,
        name: job.title,
        jobs: job.job,
    }
    // console.log(jobInfo);
    return jobInfo;
})

console.log(jobsData);
setJobs(jobsData)

});


}, [])

    return (
        <div className='text-bold font-3xl m-10 align-item-center justify-center'>

          <p>jobsData.job</p>
          <img src="{jobsData.image}"></img>
            
            </div>
       
          
          
    
    );
};

export default Catagory;