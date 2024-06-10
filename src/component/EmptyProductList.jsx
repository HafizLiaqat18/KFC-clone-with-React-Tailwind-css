import React from 'react'
import image from '../assets/kfc-meal.afc417f5d19998efd26b.png'

function EmptyProductList() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full py-7'>
      <img className=' w-2/3 rounded-xl' src={image} alt="" />
      <p className='text-xl'>You haven’t added any items in bucket yet</p>
    </div>
  )
}

export default EmptyProductList
