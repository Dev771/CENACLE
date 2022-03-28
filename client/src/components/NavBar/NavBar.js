import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Badge, Avatar, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { getPostsBySearch } from '../../actions/post';
import './styles.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Theme from '@mui/icons-material/Palette';
import { ChangeTheme } from '../../actions/Auth';
import ThemeNav from '../Theme/Theme';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const NavBar = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const query = useQuery();
    const [search, setSearch] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
    const searchQuery = query.get('searchQuery');
    const [SignInUser, setSignInUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [ThemeM , setThemeM ] = useState(false);
    const [color , setColor ] = useState(SignInUser?.result?.theme?.color || SignInUser?.data?.theme?.color || "color-1");
    const [ Font, setFont ] = useState('font-size-3');
    const [ bg, setBg ] = useState(SignInUser?.result?.theme?.background || SignInUser?.data?.theme?.background || "bg-1");

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
    
    const handlewow = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

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

        const OpenTheme = (click) => {
            setThemeM(click);
        }
        
        const themeEdit = (type, value) => {
            if(type === 'color') {
                dispatch(ChangeTheme(type, value));
                setColor(value);
            } else if(type === 'font') {
                setFont(value);
            } else if(type === 'bg') {
                dispatch(ChangeTheme("background", value));
                setBg(value);
            }
        }
        
        // useEffect(async() =>{
        // }, [User]);
        
        useEffect(() => {
        
            async function background(bg) {
                if(bg === 'bg-1') {
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '95%');
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '95%');
        
                    await document.querySelector(':root').style.setProperty('--dark-color-lightness', '17%');
                    await document.querySelector(':root').style.setProperty('--white-color-lightness', '100%');
                } else if(bg === 'bg-2') {
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '15%');
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '15%');
        
                    await document.querySelector(':root').style.setProperty('--dark-color-lightness', '95%');
                    await document.querySelector(':root').style.setProperty('--white-color-lightness', '20%');
                } else if(bg === 'bg-3') {
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '0%');
                    await document.querySelector(':root').style.setProperty('--light-color-lightness', '0%');
        
                    await document.querySelector(':root').style.setProperty('--dark-color-lightness', '95%');
                    await document.querySelector(':root').style.setProperty('--white-color-lightness', '10%');
                }
            }
        
            async function colors(color) {
                if(color === 'color-1') {
                    await document.documentElement.style.setProperty('--primary-color-hue', 252);
                    await document.documentElement.style.setProperty('--primary-color-hue', 252);
                } else if(color === 'color-2') {
                    await document.documentElement.style.setProperty('--primary-color-hue', 52);
                    await document.documentElement.style.setProperty('--primary-color-hue', 52);
                } else if(color === 'color-3') {
                    await document.documentElement.style.setProperty('--primary-color-hue', 352);
                    await document.documentElement.style.setProperty('--primary-color-hue', 352);
                } else if(color === 'color-4') {
                    await document.documentElement.style.setProperty('--primary-color-hue', 152);
                    await document.documentElement.style.setProperty('--primary-color-hue', 152);
                } else if(color === 'color-5') {
                    await document.documentElement.style.setProperty('--primary-color-hue', 202);
                    await document.documentElement.style.setProperty('--primary-color-hue', 202);
                }
            }
        
            background(bg);
            colors(color);
        
        
        
            if(Font === 'font-size-1') {
                document.querySelector('html').style.fontSize = '10px';
                document.documentElement.style.setProperty('----sticky-top-left', '5.4rem');
                document.documentElement.style.setProperty('----sticky-top-right', '5.4rem');
            } else if(Font === 'font-size-2') {
                document.querySelector('html').style.fontSize = '13px';
                document.documentElement.style.setProperty('----sticky-top-left', '5.4rem');
                document.documentElement.style.setProperty('----sticky-top-right', '-7rem');
            } else if(Font === 'font-size-3') {
                document.querySelector('html').style.fontSize = '16px';
                document.documentElement.style.setProperty('----sticky-top-left', '5.4rem');
                document.documentElement.style.setProperty('----sticky-top-right', '-17rem');
            } else if(Font === 'font-size-4') {
                document.querySelector('html').style.fontSize = '19px';
                document.documentElement.style.setProperty('----sticky-top-left', '-5rem');
                document.documentElement.style.setProperty('----sticky-top-right', '-25rem');
            } else if(Font === 'font-size-5') {
                document.querySelector('html').style.fontSize = '22px';
                document.documentElement.style.setProperty('----sticky-top-left', '-12rem');
                document.documentElement.style.setProperty('----sticky-top-right', '-35rem');
            }
        
        
        }, [Font, bg, color]);
      

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
                    placeholder='Search for Ispiration , Title'
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
                        <>
                            <Badge 
                                onClick={handlewow}
                                overlap='circular' 
                                variant='dot' 
                                anchorOrigin={{  vertical: 'bottom', horizontal: 'right'}} 
                                color='secondary'
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                {SignInUser?.result.imageURL ? 
                                <Avatar style={{ width: '40px', height: '40px'}} alt={SignInUser?.result.name} src={SignInUser?.result?.imageURL} >
                                {SignInUser?.result.name.charAt(0)}
                                </Avatar>
                                :
                                <Avatar style={{ width: '40px', height: '40px'}} alt={SignInUser?.result.name} src={SignInUser?.result?.imageUrl} >
                                {SignInUser?.result.name.charAt(0)}
                                </Avatar>
                                }
                                
                            </Badge>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'black',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => navigate(`/Profile/${SignInUser?.result?._id || SignInUser?.result?.googleId}`)}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Profile
                                </MenuItem>
                                <MenuItem onClick={() => OpenTheme(true)}>
                                <ListItemIcon>
                                    <Theme fontSize="small" />
                                </ListItemIcon>
                                 Theme
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={logout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>                               
                            </Menu>
                      </>
                            
                    )}
                </div>
                {ThemeM ? ( 
                <>
                    <ThemeNav 
                        themeClose = {OpenTheme}
                        theme = {themeEdit}
                        color = {color}
                        bg = {bg}
                        Font = {Font}
                    />
                </> 
            ) : (
                <></>
            )} 
            </div>
        </nav>
    )
}

export default NavBar
