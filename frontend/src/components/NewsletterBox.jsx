import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300'>
        Subscribe now & get 20% off
      </p>
      <p className='text-gray-400 dark:text-gray-400 mt-3 transition-colors duration-300'>
        Never miss a drop. Subscribe now and be the first to know about new arrivals, exclusive deals, and special offers.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 dark:border-gray-600 pl-3 rounded transition-colors duration-300'
      >
        <input
          className='w-full sm:flex-1 outline-none bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black dark:bg-white dark:text-black text-white text-xs px-10 py-4 rounded transition-colors duration-300'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
