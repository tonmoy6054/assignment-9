import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Catagory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('/public/catagory.json')
        .then(data => {

            const loadedTwoData = data.data;
            // console.log(loadedTwoData);
const jobsData = loadedTwoData.map(singleJob => {
    console.log(singleJob);
const jobInfo = {
    name: singleJob.title,
    img: singleJob.logo,
    jobs: singleJob.job
}
// console.log(jobInfo);
return jobInfo;

})
setJobs(jobsData);
// console.log(jobsData);


        });       


}, [])

    return 
} 

export default Catagory;