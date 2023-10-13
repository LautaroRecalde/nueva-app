import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import React, {useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import {list} from './mock/data'
import Checkout from './components/Checkout/Checkout';

function App() {
 // useEffect(() => {
//     const collectionProductos = collection(db, 'productos');
//     list.map((item) => addDoc(collectionProductos, item));
// }, []);


    return (
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<ItemListContainer greeting='Bienvenidos!' />} />
      <Route path='/category/:categoryid' element= {<ItemListContainer greeting='Categoria:' />} />
      <Route path='/detail/:id' element= {<ItemDetailContainer/>} />
      <Route path='/cart' element= {<Cart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
    );
  }
  
  export default App;