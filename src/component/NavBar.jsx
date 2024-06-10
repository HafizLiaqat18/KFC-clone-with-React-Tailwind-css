import React, { useState } from 'react';
// import image from '../assets/kfc-meal.afc417f5d19998efd26b.png'
// import OffCanvas from './OffCanvas';

function NavBar({offCanvasBtn,totalItems,searchBar,setSearchBar }) {
  const [faBar, setFaBar] = useState(false);

  function faBarbtn(e) {
    setFaBar(prevState => !prevState);
  
    console.log(e, faBar);
  }

  return (
    <header className='w-full text-xl sticky top-0 left-0 bg-black text-white'>
      <nav className=' w-full pt-4'>
        {
          faBar === false ? (
            <>
              <div className=' flex justify-between items-center  px-10'>

                <div className='flex w-2/5 justify-between  items-center h-16'>
                  {/* <img className=' w-16' src={image} alt="" /> */}
                  <h1 className=' text-red-500 text-4xl'>KFC</h1>
                  <div className='hidden md:flex w-full justify-around pr-14 pl-5'>
                    <button className='border-2 border-red-700 p-2 uppercase'>Delivery</button>
                    <button className='ml-3 uppercase'> PickUp</button>
                  </div>
                </div>
                <div className='hidden md:flex justify-between w-1/2'>
                  <input placeholder='Search' className='text-black w-10/12 mr-5 px-2  border-2 focus:border-red-600 outline-none rounded' type="text" value={searchBar} onChange={(e)=>{console.log(e.target.value);setSearchBar(e.target.value)}} />
                  <button className='bg-red-600 border rounded-lg border-none p-1 uppercase hover:bg-red-500 transition-all duration-300 ease-in-out text-white'>Login</button>
                  <i className="ml-7 fa-solid cursor-pointer fa-cart-shopping bg-red-600 border rounded-lg border-none p-3 hover:bg-red-500 transition-all duration-300 ease-in-out text-white" onClick={offCanvasBtn}><span className='px-1'>{totalItems}</span></i>


                </div>
                <i
                  className={`fa-solid cursor-pointer md:hidden ${faBar ? 'hidden' : 'inline'} fa-bars`}
                  onClick={faBarbtn}
                ></i>
              </div>
            </>) : (
            <>
                <div className=' w-full h-80 md:hidden border-b-2 border-red-600 flex justify-between px-10 py-3'>
                  <div className='flex gap-7 flex-col w-full'>
                  <div className='flex item-center w-16 h-80'>
                  <h1 className='text-red-500 text-4xl'>KFC</h1>
                  </div>
                    <div className='w-full text-center'>
                      <button className='block w-full mb-6 transition-all ease-in-out duration-300 hover:text-red-600 uppercase'>Delivery</button>
                      <button className=' transition-all ease-in-out duration-300 hover:text-red-600 uppercase'> PickUp</button>
                    </div>
                    <div className='flex flex-col gap-4 text-center justify-between w-full'>
                    <div className='w-full'>
                      <input className='text-black px-2 border-2 focus:border-red-600 outline-none rounded w-3/4' type="text" placeholder='Search' value={searchBar} onChange={(e)=>setSearchBar(e.target.value)}  />
                    </div>
                      <div>

                      <button className='bg-red-600 border rounded-lg border-none p-1 uppercase hover:bg-red-500 transition-all duration-300 ease-in-out text-white'>Login</button>
                      <i className="ml-10 fa-solid cursor-pointer fa-cart-shopping bg-red-600 border rounded-lg border-none p-2 hover:bg-red-500 transition-all duration-300 ease-in-out text-white" onClick={offCanvasBtn}><span> {totalItems}</span></i>
                      </div>
                    </div>
                  </div>
                  <i
                    className={`fa-solid cursor-pointer fa-xmark py-3`}
                    onClick={faBarbtn}
                  ></i>
                </div>
              
            </>
          )
        }
      </nav>
    </header>
  );
}

export default NavBar;
