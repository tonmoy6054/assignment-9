import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import AppliedJobs from './components/AppliedJobs'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Catagory from './components/Catagory'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([{
path: '/',
element: <App></App>,
errorElement: <ErrorPage></ErrorPage>,
children: [{
  path: '/',
  element: <Home></Home>,
  },
  {
    path: '/',
    element: <Catagory></Catagory>
  },
  {
    path: 'Statistics',
    element: <Statistics></Statistics>,
  },

{
path: 'Blogs',
element: <Blogs></Blogs>,
},


{
  path: 'applied jobs',
  element: <AppliedJobs></AppliedJobs>,
},


],
},

])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>
  
)
