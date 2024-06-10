
import './App.css';
import MainPage from './pages/MainPage';
import Footer from './component/Footer'
import NavBar from './component/NavBar';
import OffCanvas from './component/OffCanvas';
import { useState } from 'react';
import ItemAdded from './component/ItemAdded';

function App() {
  const [offCanvas, setOffCanvas] = useState({ state: false, class: "translate-x-full" });
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [searchBar, setSearchBar] = useState("");
  const [popupText, setPopupText] = useState("");
  function addProducToOffCanvas(item) {
    let checkProudct = orderedProduct.filter(product => product.id === item.id);
    if (!checkProudct.length) {
      setOrderedProduct([...orderedProduct, item]);
    } else {

      let updateProduct = orderedProduct.map(product => {
        if (product.id === item.id) {
          let newQty = item.qty + product.qty;
          let newPrice = item.price + product.price;
          let newProduct = {
            ...product,
            qty: newQty,
            price: newPrice
          }
          return newProduct;
        } else {
          return product;
        }

      })

      setOrderedProduct(updateProduct);
    }


  }

  function setPopUptext(text){
    setPopupText(text);
    if(text==="Thanks for order :)"){

      setOrderedProduct([]);
      setTotalItems(0)
    }
  }



  function offCanvasBtn() {
    setOffCanvas({ class: ((offCanvas.class === "translate-x-full") ? "translate-x-0" : "translate-x-full"), state: !offCanvas.state })

  }

  return (
    <div className='relative'>
      {
        popupText !== "" ?
          <ItemAdded popupText={popupText} setPopupText={setPopUptext} /> :
          <>
            <NavBar offCanvasBtn={offCanvasBtn} totalItems={totalItems} searchBar={searchBar} setSearchBar={setSearchBar} />

            <OffCanvas offCanvasBtn={offCanvasBtn} offCanvas={offCanvas} orderedProduct={orderedProduct} setOrderedProduct={setOrderedProduct} setTotalItems={setTotalItems} setPopupText={setPopUptext} />

            <MainPage addProducToOffCanvas={addProducToOffCanvas} setPopupText={setPopUptext} searchBar={searchBar} />
            <Footer />
          </>

      }
    </div>
  );
}

export default App;
