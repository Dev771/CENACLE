import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Badge, Avatar, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { getPostsBySearch } from '../../actions/post';
import './styles.css';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const NavBar = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const query = useQuery();
    const [search, setSearch] = useState('');
    const searchQuery = query.get('searchQuery');
    const [SignInUser, setSignInUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
        setSignInUser(null);
    }

    const handleClick = () =>{
        dispatch({ type : "RESET" });
        navigate("/Form");
    }

    const handleWhy = () =>{
        dispatch({type : "RESET" });
        navigate('/');
        window.location.reload();
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          searchPost();
          setSearch('');
        }
      };
      const searchPost = () => {
        if (search.trim() && (search.length > 0 )) {
            dispatch(getPostsBySearch({ search}));
            navigate(`/posts/search?searchQuery=${search || 'none'}`);
            setSearch('');
        } else {
            navigate('/');
        }
        };
      

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
                <span className="logo" onClick={handleWhy}>
                {/* <img src={logo} className="loggo" alt='' /> */}
                <svg className="loggo"version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 1080 1080" >
                <polygon points="709.94,834.34 767.67,934.34 312.33,934.34 84.65,540 312.33,145.66 767.67,145.66 709.94,245.66 370.06,245.66 
                    200.12,540 370.06,834.34 "/>
                <polygon points="814.55,540 677.27,777.76 402.73,777.76 460.46,677.76 619.54,677.76 699.08,540 619.54,402.23 460.46,402.23 
                    402.73,302.23 677.27,302.23 "/>
                </svg>
                    Cenacle
                </span>
                </h2>
                <div className="search-bar why">
                    <i className="uil uil-search"></i>
                    {/* <input type="search" placeholder="Search for Creators, Ispiration, and people" /> */}
                    <TextField 
                    id="messages-search"
                    name="search" 
                    placeholder='Search for Creators, Ispiration, and people'
                    onKeyPress={handleKeyPress}
                    fullWidth 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className='left-nav'>
                {!SignInUser ? (<></>):
                    (<div className="create">
                        <span className="btn btn-primary" onClick={handleClick}>Create</span>
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
