import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home'
import Statistics from './components/Statistics'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([{
path: '/',
element: <App></App>,
children: [{
path: '/',
element: <Home></Home>,
},
{
path: '/statistics',
element: <Statistics></Statistics>,

},
{
path: '/blogs',
element: <Blogs></Blogs>,
},

{
  path: '/applied jobs',
  element: <AppliedJobs></AppliedJobs>,
},


],
},
{
path: '/about',
element: <p>about page</p>,

},
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>
  
)
