import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Badge, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import './styles.css';

const NavBar = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [SignInUser, setSignInUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
        setSignInUser(null);
    }
    
    useEffect(() => {
        const token = SignInUser?.token;
        
        if (token) {
            const decodedToken = decode(token);
            
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        
        setSignInUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    
    return (
        <nav>
            <div className="container">
                <h2 className='headingg'>
                <Link className="logo" to={'/'}>
                    Social Out
                </Link>
                </h2>
                <div className="search-bar">
                    <i className="uil uil-search"></i>
                    <input type="search" placeholder="Search for Creators, Ispiration, and people" />
                </div>
                <div className='left-nav'>
                {!SignInUser ? (<></>):
                    (<div className="create">
                        <a className="btn btn-primary" href='/Form'>Create</a>
                    </div>)}
                    {!SignInUser ? (
                        <div className='Profile-1'>
                           <span className="btn btn-primary" onClick={() => navigate('/login/SignIn')} >Login</span>
                           <span className="btn btn-primary" onClick={() => navigate('/login/SignUp')} >Register</span>
                        </div>
                    ) :  (
                            <Badge 
                                onClick={logout}
                                overlap='circular' 
                                variant='dot' 
                                anchorOrigin={{  vertical: 'bottom', horizontal: 'right'}} 
                                color='secondary'
                            >
                                <Avatar style={{ width: '40px', height: '40px'}} alt={SignInUser?.result.name} src={SignInUser?.result.imageUrl} >{SignInUser?.result.name.charAt(0)}</Avatar>
                            </Badge>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
