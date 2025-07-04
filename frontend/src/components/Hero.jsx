import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 dark:border-gray-600 transition-colors duration-300'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-800 dark:text-gray-300'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-gray-800 dark:bg-gray-300'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-gray-900 dark:text-white'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-gray-800 dark:bg-gray-300'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero" />
    </div>
  )
}

export default Hero
