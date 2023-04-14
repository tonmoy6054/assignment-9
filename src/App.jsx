import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
// import Statistics from './components/Statistics';

import Home from './components/Home';
import Statistics from './components/Statistics';
import Catagory from './components/Catagory';
import JobCard from './components/Cards/JobCard';
import PostList from './components/PostList';
import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <div>
      {/* header */}
     <Header></Header>
     <div className='min-h-[calc-(100vh-137px)]'>
     <Catagory></Catagory>
   
     <Outlet>
  </Outlet>
  <JobCard></JobCard>
  <PostList></PostList>
    
     </div>
     
     
      {/* footer */}
      <Footer></Footer>
    </div>
    
  );
};

export default App;