import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className='text-gray-700 dark:text-gray-300 cursor-pointer transition-colors duration-300'
      to={`/product/${id}`}
    >
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out duration-300'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  )
}

export default ProductItem
