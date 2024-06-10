import React, { useState } from 'react'
import Products from '../component/Products'
import Categories from '../component/Categories'
import categories from '../data/Kfc/Categories.json';
import products from '../data/Kfc/Products.json';
import ProductDetailOffCanvas from '../component/ProductDetailOffCanvas';
function MainPage({addProducToOffCanvas,searchBar,setPopupText}) {
  const [addToCart, setAddToCart] = useState({ product: {}, status: false });
  const [selectedCategories,setSelectedCategories] =useState([]);


  function itemDetail(item) {
    setAddToCart({...addToCart, product: item, status: !addToCart.status });

  }

  let filterProducts = selectedCategories.length? selectedCategories[0].title==="All"?products:(products.filter((item)=>item.categoryId===selectedCategories[0].id)):products;
  let filterCategories = selectedCategories.length? selectedCategories[0].title==='All'?categories:categories.filter((cate)=>cate.id ===selectedCategories[0].id):categories;
  let finalCategories = filterCategories.filter((item)=>item.title !=="All")
let searchProducts = searchBar!==''?
filterProducts.filter((item)=>item.title.toLowerCase().includes(searchBar.toLowerCase())||item.description.toLowerCase().includes(searchBar.toLowerCase()))

:filterProducts;


  return (
    <div>
     
      <ProductDetailOffCanvas itemDetail={itemDetail} addToCart={addToCart} setAddToCart={setAddToCart} addProducToOffCanvas={addProducToOffCanvas} setPopupText={setPopupText}/>
      <Categories categories={categories} setSelectedCategories={setSelectedCategories}/>
      <Products products={searchProducts} categories={finalCategories} itemDetail={itemDetail} />

    </div>
  )
}

export default MainPage
