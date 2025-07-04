import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='transition-colors duration-300'>
      <div className='text-center text-2xl pt-10 border-t border-gray-300 dark:border-gray-600'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600 dark:text-gray-300'>Our Store</p>
          <p className='text-gray-500 dark:text-gray-400'>
            54709 Willms  <br /> Suite 350, Hyderabad, INDIA
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Tel: (415) 555-0132 <br /> Email: admin@buybuddy.com
          </p>
          <p className='font-semibold text-xl text-gray-600 dark:text-gray-300'>Careers at BuyBuddy</p>
          <p className='text-gray-500 dark:text-gray-400'>Learn more about our teams and job openings.</p>
          <button className='border border-black dark:border-white px-8 py-4 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
