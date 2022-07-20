import React , { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './code/Home';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';
import Auth from './components/auth/Auth';
import Login from './components/LoginSignUp/Login';
import Tags from './components/tags/Tags';
import Loading from './components/Loading/Loading';
// import Postdetails from './components/Post Details/Postdetails';
import Otp from './components/OTP/OTP';
import Messenger from './components/Messenger/Messenger';

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
                <Route path='/Profile/undefined' exact element={<Navigate to='/'/>} />
                <Route path='/Profile/:creatorId' exact element={<Profile />} />
                <Route path='/auth/:action' exact element={<Auth />} />
                <Route path='/login/:action' exact element={<Login />} />
                <Route path="/posts/search" exact element={<Home/>} />
                <Route path='/tag/acbd' exact element={<Tags />} />
                <Route path='/Loading' exact element={<Loading />}/>
                <Route path='/OTP/:id' exact element={<Otp/>} />
                <Route path='/Messsages' exact element={<Messenger />} />
                <Route path='*' element={<Navigate to='/'/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
