import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from './components/register';
import Products from './components/products';
import CartPage from './components/cartPage.js';
import CartContext from './contexts/cartContext.js';

function App(){
    
    const [cartProducts, setCartProducts] = useState([]);

    return(
        <CartContext.Provider value={{cartProducts, setCartProducts}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-up" element={<Register/>} exact/>
                    <Route path="/" element={<Products />} exact/>
                    <Route path="/cart" element={<CartPage/>} exact/>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}



export default App;
