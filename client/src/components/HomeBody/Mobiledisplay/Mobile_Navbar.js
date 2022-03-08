import React , {useEffect, useState} from 'react'
import './Mobile.css'
import { useNavigate , useLocation} from 'react-router-dom';
import Theme from '../../Theme/Theme';
import Msearch from './Mobilesearch';
import { ChangeTheme } from '../../../actions/Auth';
import { useDispatch } from 'react-redux';



const Mobile_Navbar = () => {
  
  const location = useLocation();
  const [active , setactive] = useState(location.pathname.split("/")[1] === "" ? "home" : "profile"   );
  const [ThemeM , setThemeM ] = useState(false);
  const [rightS , setrightS ] = useState(false);
  const navigate = useNavigate();
  const User =JSON.parse(localStorage.getItem('profile'));
  const [color , setColor ] = useState(User?.result?.theme?.color || User?.data?.theme?.color || "color-1");
  const [ Font, setFont ] = useState('font-size-3');
  const [ bg, setBg ] = useState(User?.result?.theme?.background || User?.data?.theme?.background || "bg-1");
  const dispatch = useDispatch();


  const handleclick = (name) => {
    setactive(name);
   
    {name === "profile" ? navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`) 
    : name === "theme"  ? setThemeM(true)
    : name === "search" ? Opensearch()
    : name === "home" ? navigate(`/`)
    : navigate(`/`)
    }
 
  }
  const Opensearch = () =>{
    setrightS(!rightS);
  }

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

  return (
    <div>
    <div className='BottomNav'> 
        <ul>
            <li name="profile" onClick={() => handleclick("profile")}> 
              <span className={`menu-item1 ${active === "profile" ? "active1" : "" }`  } >
                <i className="uil uil-user"></i>
              </span>
            </li>
            <li name="search" onClick={() => handleclick("search")}> 
              <span className={`menu-item1 ${active === "search" ? "active1" : "" }`  } >
                <i className="uil uil-search"></i>
              </span>
            </li><li onClick={() => handleclick("home")}> 
              <span className={`menu-item1 ${active === "home" ? "active1" : "" }`  }>
                <i className="uil uil-home "></i>
              </span>
            </li>
            <li onClick={() => setactive ("messages")}> 
              <span className={`menu-item1 ${active === "messages" ? "active1" : "" }`  }>
                <i className="uil uil-envelopes"></i>
              </span>
            </li>
            <li name="theme" onClick={() => handleclick("theme")}> 
              <span className={`menu-item1 ${active === "theme" ? "active1" : "" }`  }>
                <i className="uil uil-palette"></i>
              </span>
            </li>
        </ul>
    </div>
    {ThemeM ? ( 
                <>
                    <Theme 
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
      {rightS ? (
                 <>
                    <Msearch
                      searchClose = {Opensearch}
                    />
                </> 
            ) : (
              <></>
            )}
    </div>
  )
}

export default Mobile_Navbar