import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';

import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Catagory from './components/Catagory';
import Footer from './components/Footer/Footer';
import JobCard from './components/Cards/JobCard';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails/PostDetail';

import AppliedJobsPage from './components/AppliedJobPage/AppliedJobPage';


const Main = () => {
  const [posts, setPosts] = useState([]);
  // const [showAppliedJobs, setShowAppliedJobs] = useState(false); 
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);
  console.log('Fetched Posts:', posts);


  const navigateToDetails = postId => {
    
    window.location.href = `/details/${postId}`;
  };

  
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: (
            <>
              <Header />
              <Home />
              <Catagory />
              <JobCard />
              <PostList posts={posts} navigateToDetails={navigateToDetails} /> 
              <Footer />
            </>
          ),
        },
        {
          path: '/catagory',
          element: <Catagory />,
        },
        {
          path: '/applied-jobs',
          element: <AppliedJobsPage />,
        },
        {
          path: '/Statistics',
          element: (
            <>
              <Header />
              <Statistics />
              <Footer />
            </>
          ),
        },
        {
          path: '/Blogs',
          element: (
            <>
              <Header />
              <Blogs />
              <Footer />
            </>
          ),
        },
        
      
      ],
    },
    {
      path: '/details/:postId',
      element:  <>
     
      <PostDetails posts={posts}   />
    </>
    
    },
  ]);

  return (
    <RouterProvider router={router} 
    
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Main />
);