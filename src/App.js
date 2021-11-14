import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Products from './components/products';

function App(){
    return(
     
    <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element={<Register/>} exact/>
            <Route path="/" element={<Products/>} exact/>
        </Routes>
    </BrowserRouter>
    )
}



export default App;
