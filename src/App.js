import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from './components/register';
import Products from './components/products';
import CartPage from './components/cartPage.js';
import CartContext from './contexts/cartContext.js';
import Login from './components/login';
import UserContext from './contexts/usercontext';

export default function App(){
    const[user,setUser] = useState();
    const [cartProducts, setCartProducts] = useState([]);

    return(
        <CartContext.Provider value={{cartProducts, setCartProducts}}>
            <BrowserRouter>
                <UserContext.Provider value={{user,setUser}}>
                    <Routes>
                        <Route path="/sign-up" element={<Register/>} exact/>
                        <Route path="/" element={<Products />} exact/>
                        <Route path="/sign-in" element={<Login/>} exact/>
                        <Route path="/cart" element={<CartPage/>} exact/>
                </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </CartContext.Provider>
    );
}