import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';

function App(){
    return(
     
    <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    )
}



export default App;
