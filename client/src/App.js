import React , { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './code/Home';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';
import Auth from './components/auth/Auth';
import Login from './components/LoginSignUp/Login';
import Error from './components/Error/Error';
// import Postdetails from './components/Post Details/Postdetails';

const App = () => {

    let User = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        User = JSON.parse(localStorage.getItem('profile'))
    }, [User]);


    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Form' exact element={<Form />} />
                <Route path='/Profile/:creatorId' exact element={<Profile />} />
                <Route path='/auth/:action' exact element={<Auth />} />
                <Route path='/login/:action' exact element={<Login />} />
                <Route path="/posts/search" exact element={<Home/>} />
                {/* <Route path="/posts/:id" exact element={<Postdetails/>}/> */}
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
