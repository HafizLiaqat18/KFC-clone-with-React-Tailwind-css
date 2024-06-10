import React from 'react'
import image from '../assets/kfc-meal.afc417f5d19998efd26b.png'

function NotFound() {
  return (
  
       <div className='flex flex-col justify-start items-center w-full h-full py-7'>
      <img className=' w-1/3 rounded-lg' src={image} alt="" />
      <p className='text-2xl'>Product Not found 🙁</p>
 
    </div>
  )
}

export default NotFound
