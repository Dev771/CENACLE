import React from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './code/Home';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';
import Auth from './components/auth/Auth';
import Login from './components/LoginSignUp/Login';
import Error from './components/Error/Error';

const App = () => {

    const User = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                {!User ?  (
                    <Route path='/Form' exact element={<Navigate to='/' />} />
                ) : (
                    <Route path='/Form' exact element={<Form />} />
                )}
                <Route path='/Profile/:creatorId' exact element={<Profile />} />
                <Route path='/auth/:action' exact element={<Auth />} />
                <Route path='/login/:action' exact element={<Login />} />
                <Route path="/posts/search" exact element={<Home/>} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
