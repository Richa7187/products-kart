import './App.css';
import SideBar from './SideBar/SideBar';
import MyOrder from './MyOrder/MyOrder';
import ProductList from './Content/ProductList';
import { useState } from 'react';

function App() {
const [selectedProduct, setSelectedProduct] = useState([]);

const handleSelectedProduct = (product) => {
  const productPresent = selectedProduct.findIndex((i) => i.id == product.id);
  if (productPresent === -1){
    setSelectedProduct([...selectedProduct,{...product, quantity:1}]);
  }else{
    const allProducts = [...selectedProduct];
    allProducts[productPresent].quantity++;
    setSelectedProduct([...selectedProduct]);
  }
}
  return (
    <div className="App">
      <div className='SideBarWrapper'>
      <SideBar></SideBar>
      </div>
      <div className='ContentWrapper'>
      <ProductList selectedProduct={handleSelectedProduct}></ProductList>
      </div>
      <div className='MyOrderWrapper'>
      <MyOrder selectedProduct={selectedProduct}></MyOrder>
      </div>
    </div>
  );
}

export default App;
