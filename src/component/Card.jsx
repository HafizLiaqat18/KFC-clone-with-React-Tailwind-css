import React from 'react'

function Card({ item,itemDetail }) {
    return (
        <div className=' rounded-lg w-[80%] h-[430px]  sm:h-[400px] sm:w-[30%] md:w-[30%] lg:w-[20%] lg:h-[450px] my-3 p-5 bg-[#212529] text-white cursor-pointer text-left'>
            <div className=' w-3/4 m-auto'>
                <img className=' w-full object-cover  hover:scale-110 transition-all duration-500 ease-in-out ' src={item.image} alt="" />
            </div>

            <div className='py-3'>
                <h3 className='text-xl font-bold'>{item.title}</h3>
                <p className='text-sm'>{(item.description.length>=30? (item.description.slice(0,50)+("......")):item.description)}</p>
                <span className='bg-red-600 inline-block mt-2 text-white rounded py-1 px-2'>Rs. {item.price}</span>
            </div>
            <button className='bg-red-600 px-2 py-1 rounded font-medium hover:bg-red-500 text-sm transition-all duration-200 ease-in-out text-white' onClick={_=>{itemDetail({...item, qty : 1});}}>Add to Cart</button>


        </div>
    )
}

export default Card
