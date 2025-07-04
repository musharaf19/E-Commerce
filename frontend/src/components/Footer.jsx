import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32 dark:invert' alt="Logo" />
          <p className='w-full md:w-2/3'>
            Founded with a passion for style and customer satisfaction, Buy Buddy is more than just a store.
            We're a community of fashion-forward thinkers, bargain hunters, and everyday trendsetters.
            Whether you're refreshing your wardrobe, looking for a thoughtful gift, or hunting for a deal,
            we've got something just for you.
            With a user-friendly experience, secure payments, and fast delivery, we make sure your
            shopping journey is smooth from start to finish. Join thousands of happy customers and
            let Buy Buddy be your go-to shopping buddy.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-gray-800 dark:text-gray-100'>COMPANY</p>
          <ul className='flex flex-col gap-1'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-gray-800 dark:text-gray-100'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1'>
            <li>+1-212-456-7890</li>
            <li>contact@buybuddy.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-300 dark:border-gray-700' />
        <p className='py-5 text-sm text-center'>
          Copyright 2025@ buybuddy.com - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
