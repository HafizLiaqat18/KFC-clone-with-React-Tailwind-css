import React from 'react'

function ItemAdded({popupText,setPopupText}) {
  return (
    <div className='absolute top-0 left-0 h-[100vh] w-full   bg-black z-40 text-black  '>
    <div className=' lg:w-1/3 lg:h-1/2 md:w-1/2 md:h-2/2 md:p-4 rounded-md w-4/3  h-1/3 relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col justify-evenly'>
    <i className="text-[100px] font-light text-green-700 text-center fa-regular fa-circle-check"></i>
    <div className='text-center'>
      <p className='text-4xl font-medium'>{popupText}</p>
      <p className='text-xl '>If you want to more then select more products!</p>

    </div>
    <button className=' py-2 px-8 rounded-md text-center  bg-green-300 self-center hover:bg-green-400 transition-all duration-300 ease-in-out ' onClick={_=>setPopupText("")}>Ok</button>
    </div>
    </div>
  )
}

export default ItemAdded
