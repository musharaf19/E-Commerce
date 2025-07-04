import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium text-gray-700 dark:text-gray-200'>
      <Link to='/'><img src={assets.logo} className='w-36 dark:invert' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm'>
        {['/', '/collection', '/about', '/contact'].map((path, idx) => {
          const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT']
          return (
            <NavLink key={path} to={path} className='flex flex-col items-center gap-1'>
              <p>{labels[idx]}</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-300 hidden' />
            </NavLink>
          )
        })}
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => { setShowSearch(true); navigate('/collection') }}
          src={assets.search_icon}
          className='w-5 cursor-pointer dark:invert'
          alt="Search"
        />

        <div className='group relative'>
          <img
            onClick={() => token ? null : navigate('/login')}
            className='w-5 cursor-pointer dark:invert'
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 dark:bg-gray-800 dark:text-gray-300 rounded shadow'>
                <p className='cursor-pointer hover:text-black dark:hover:text-white'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black dark:hover:text-white'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black dark:hover:text-white'>Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5 dark:invert' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white dark:bg-white dark:text-black aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden dark:invert'
          alt="Menu"
        />
      </div>

      {/* Sidebar for mobile */}
      <div className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-white dark:bg-gray-900 transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 dark:text-gray-300'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180 dark:invert' src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, idx) => {
            const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT']
            return (
              <NavLink
                key={path}
                onClick={() => setVisible(false)}
                className='py-2 pl-6 border border-gray-300 dark:border-gray-700'
                to={path}
              >
                {labels[idx]}
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
