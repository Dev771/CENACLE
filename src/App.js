import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './code/Home';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
