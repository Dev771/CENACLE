import React , { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './code/Home';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';
import Login from './components/LoginSignUp/Login';
import Tags from './components/tags/Tags';
import Loading from './components/Loading/Loading';
// import Postdetails from './components/Post Details/Postdetails';
import Otp from './components/OTP/OTP';
import Messenger from './components/Messenger/Messenger';
import AdminHome from './components/Admin/Home/AdminHome';
import { useSelector } from 'react-redux';
import Error from './components/Error/Error';
import Postdetails from './components/Post Details/Postdetails';

const App = () => {

    let User = JSON.parse(localStorage.getItem('profile'));
    const error = useSelector((state) => state.error);

    useEffect(() => {
        User = JSON.parse(localStorage.getItem('profile'))
    }, [User]);


    return (
        <BrowserRouter>
            <NavBar />
            {
                error.status ? (
                    <Error message={error.message} is_Success={error.is_Success} />
                ) : (null)
            }
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Form' exact element={<Form />} />
                <Route path='/Profile/undefined' exact element={<Navigate to='/'/>} />
                <Route path='/Profile/:creatorId' exact element={<Profile />} />
                <Route path='/login/:action' exact element={<Login />} />
                <Route path="/posts/search" exact element={<Home/>} />
                <Route path="/post/detail/:id" exact element={<Postdetails />} />
                <Route path='/tag/acbd' exact element={<Tags />} />
                <Route path='/Loading' exact element={<Loading />}/>
                <Route path='/OTP/:id' exact element={<Otp/>} />
                <Route path='/Messsages' exact element={<Messenger />} />
                <Route path='/Admin' exact element={<AdminHome />} />
                <Route path='*' element={<Navigate to='/'/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;