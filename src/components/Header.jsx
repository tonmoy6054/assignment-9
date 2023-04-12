import React from 'react'; 
import { useState } from 'react';
import { BriefcaseIcon,Bars3BottomRightIcon,BoltIcon,XMarkIcon } from '@heroicons/react/24/solid'

import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='flex items-center justify-between m-5'>

            {/* logo */}
<div className='inline-flex items-center'>
    <BriefcaseIcon className='h-8 w-8 text-red-500'></BriefcaseIcon>
    <h1 className='font-bold text-4xl ml-2 tracking-wide'>Job Coach</h1>
    </div>
    
            {/* nav item */}

            <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
         <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
            >
              Home
            </NavLink>
          </li>





          <li>
         <NavLink
              to='/Statistics'
              className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/AppliedJobs'
              className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Blogs'
              className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div  className='mt-20 text-align-center font-bold text-3xl'>
        <button>Job Details</button></div>
        
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & title */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Job Coach
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/Statistics' className='default'>
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/AppliedJobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        AppliedJobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/Blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div> 
     
    );
    
};

export default Header;