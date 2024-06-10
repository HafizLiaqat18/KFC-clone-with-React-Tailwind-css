import React, { useState } from 'react';

function Categories({ categories ,setSelectedCategories}) {
  const [selectedOption, setSelectedOption] = useState(categories[0].title);

  function selectOption(option) {
    setSelectedOption(option.title);
    setSelectedCategories([option]);


  }
  return (
    <>

      <div className='my-8 flex flex-wrap md:justify-between px-10 '>
        {
          categories.map(category => {
            return (
              <button onClick={_ => { selectOption(category) }} className={` ${selectedOption === category.title ? "bg-red-600 " : "bg-[#212529]"} md:text-base font-semibold p-2  hover:bg-red-600 hover:text-white text-white mx-4 my-1 md:mx-0 rounded text-sm transition-all duration-500 ease-in-out`} key={category.id}>{category.title}</button>

            )
          })
        }
      </div>
    </>
  )
}

export default Categories
