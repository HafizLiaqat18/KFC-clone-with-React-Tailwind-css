import React from 'react';
import Card from './Card';
import NotFound from './NotFound';

function Products({ products, categories,itemDetail }) {

  return (
    <>
    {
products.length?
      <div className='px-9'>
        {
          categories.map((category) => {
            return (
              <div key={category.id}>

                <h1 className='sm:text-2xl md:text-3xl text-xl text-center sm:text-start font-bold my-4'>{category.title}</h1>
                <div className='h-full w-full flex justify-center items-center md:items-start flex-col sm:flex-row sm:justify-between flex-wrap gap-1 '>
                {
                  products.map((product)=>((category.id ===product.categoryId)&& <Card key={product.id} item={product} itemDetail={itemDetail} />))
                }
                <div className='w-full h-[2px] bg-slate-500'></div>


                </div>
              </div>
            )
          })
        }

      </div>
      :
      <NotFound/>
    }
    </>
  )
}

export default Products
