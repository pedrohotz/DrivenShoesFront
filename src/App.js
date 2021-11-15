import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Products from './components/products';
import Login from './components/login';
import { useState } from 'react';
import UserContext from './contexts/usercontext';
export default function App(){
    const[user,setUser] = useState();

    return(
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
        <Routes>
            <Route path="/sign-up" element={<Register/>} exact/>
            <Route path="/" element={<Products/>} exact/>
            <Route path="/sign-in" element={<Login/>} exact/>
        </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    )
}


