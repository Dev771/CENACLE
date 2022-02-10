import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Badge, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import './styles.css';

const NavBar = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [SignInUser, setSignInUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {    
        setSignInUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
        setSignInUser(null);
    }

    return (
        <nav>
            <div className="container">
                <h2 className="logo">
                    Social_Media
                </h2>
                <div className="search-bar">
                    <i className="uil uil-search"></i>
                    <input type="search" placeholder="Search for Creators, Ispiration, and people" />
                </div>
                <div className='left-nav'>
                    <div className="create">
                        <a className="btn btn-primary" href='/Form'>Create</a>
                    </div>
                    {!SignInUser ? (
                        <div className='Profile-1'>
                            <Button component={Link} to='/auth/SignIn' variant='contained' color='secondary' >Login</Button>
                            <Button component={Link} to='/auth/SignUp' variant='contained' color='secondary'>Register</Button>
                        </div>
                    ) :  (
                            <Badge 
                                onClick={logout}
                                // id='Avatar'
                                overlap='circular' 
                                variant='dot' 
                                anchorOrigin={{  vertical: 'bottom', horizontal: 'right'}} 
                                color='error'
                                // ref={anchorRef}
                                // aria-controls={open ? 'menu-list-grow' : undefined}
                                // aria-haspopup="true" 
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
