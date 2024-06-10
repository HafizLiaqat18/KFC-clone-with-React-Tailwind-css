import React, { useState, useEffect } from 'react';

function ProductDetailOffCanvas({ itemDetail, addToCart ,addProducToOffCanvas,setPopupText}) {
  const [updateProduct, setUpdateProduct] = useState(addToCart.product);

  useEffect(() => {
    setUpdateProduct(addToCart.product);
  }, [addToCart.product]);

  const handleDecreaseQty = () => {
    if (updateProduct.qty > 1) {
      let qty = updateProduct.qty-1;
      
      setUpdateProduct(prevProduct => ({
        ...prevProduct,
        qty: qty,
        price : addToCart.product.price*qty
      }));
    }
  };
  
  const handleIncreaseQty = () => {
    let qty = updateProduct.qty+1;
    setUpdateProduct(prevProduct => ({
      ...prevProduct,
      qty: qty,
      price : addToCart.product.price*qty
    }));
  };

  // console.log(updateProduct);

  return (
    <div className={`fixed top-0 right-0 bg-transparent text-white h-full w-full ${addToCart.status ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out`}>
      <div className='bg-black h-full w-full sm:w-2/5 md:w-1/2 lg:w-1/3 absolute right-0'>

        <div className='w-full bg-red-600 h-16 rounded flex justify-between p-3 items-center mt-4'>
          <p className='sm:text-2xl font-medium'>Add To Cart</p>
          <i className={`fa-solid cursor-pointer fa-xmark py-3 sm:text-2xl`} onClick={itemDetail}></i>
        </div>
        <div className="body h-4/5 w-full">
          <div className='w-1/2 m-auto cursor-pointer'>
            <img className='object-cover hover:scale-125 transition-all duration-500 ease-in-out' src={updateProduct.image} alt="" />
          </div>
          <div className='p-10 h-3/5 flex flex-col justify-between'>
            <div className='flex justify-between'>
              <h6 className='text-3xl font-bold'>{updateProduct.title}</h6>
              <p className='bg-red-600 p-2 text-xl rounded'>Rs. {updateProduct.price}</p>
            </div>
            <p className='text-sm my-4'>{updateProduct.description}</p>
            <div className='flex justify-evenly'>
              <button className='bg-red-600 px-4 rounded-sm text-3xl' onClick={handleDecreaseQty}>-</button>
              <span className='text-3xl'>{updateProduct.qty}</span>
              <button className='bg-red-600 px-4 rounded-sm text-3xl' onClick={handleIncreaseQty}>+</button>
            </div>
            <button onClick={_=>{addProducToOffCanvas(updateProduct);itemDetail({});setPopupText("Order Placed to Cart!")}} className='bg-green-600 w-[50%] mx-auto my-2 py-1 rounded-md text-2xl hover:bg-green-900 transition-all duration-500 ease-in-out'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailOffCanvas;
