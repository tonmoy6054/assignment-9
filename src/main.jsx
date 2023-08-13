import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import AppliedJobs from './components/AppliedJobs'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Catagory from './components/Catagory'
import Footer from './components/Footer/Footer'
import JobCard from './components/Cards/JobCard'
import PostList from './components/PostList'


const router = createBrowserRouter([{

path: '/',

errorElement: <ErrorPage></ErrorPage>,
children: [
  {
  path: '/',
  element: <>
  <Header></Header>,
  <Home></Home>,
   <Catagory></Catagory>,
   
   <JobCard></JobCard>,
   <PostList></PostList> 
   <Footer></Footer>
  
  </>
  
  },
  {
  path: '/catagory',
  element: <Catagory></Catagory>,
 
  },
  
  {
    path: '/Statistics',
    element: <>
    <Header></Header>
    <Statistics></Statistics>
    <Footer></Footer>
    </>,
  },

{
path: '/Blogs',
element: 
<>
<Header></Header>,
<Blogs></Blogs>,
<Footer></Footer>
</>
},


{
  path: '/applied jobs',
  element: <AppliedJobs></AppliedJobs>,
},


],
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    
  </>
)
