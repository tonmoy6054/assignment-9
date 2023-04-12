import React from 'react'
import Lottie from 'lottie-react'

// import reader from '../assets/reader.json'
import reader from '../assets/Reader.json'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// import Statistics from './Statistics'

const Home = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row m-5'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
           One step closer to your <br className='hidden md:block' />{' '}
            <span className='inline-block text-blue-400'>Dream Job </span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Working harder to get your dream job at your workplace, but still not getting better results as expected, so there’s a silent bell ringing that you have to work on yourself in order to achieve your target.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/books' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Get Started
</button>
              <ShoppingCartIcon className='w-5 text-gray-100' />
            </div>
          </Link>
         
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  
  )
  

}
<div>
 
</div>

export default Home