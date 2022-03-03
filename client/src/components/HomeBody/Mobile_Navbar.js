import React , {useEffect, useState} from 'react'
import './Mobile.css'
import { useNavigate } from 'react-router-dom';
import Theme from '../Theme/Theme';
import Msearch from '../HomeBody/Mobilesearch'

const Mobile_Navbar = () => {

  const [active , setactive] = useState("home");
  const [ThemeM , setThemeM ] = useState(false);
  const [rightS , setrightS ] = useState(false);
  const navigate = useNavigate();
  const User =JSON.parse(localStorage.getItem('profile'));
  const [color , setColor ] = useState('color-1');
  const [ Font, setFont ] = useState('font-size-3');
  const [ bg, setBg ] = useState('bg-1');

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
        setColor(value);
    } else if(type === 'font') {
        setFont(value);
    } else if(type === 'bg') {
        setBg(value);
    }
}

useEffect(() => {
    if(color === 'color-1') {
        document.documentElement.style.setProperty('--primary-color-hue', 252);
    } else if(color === 'color-2') {
        document.documentElement.style.setProperty('--primary-color-hue', 52);
    } else if(color === 'color-3') {
        document.documentElement.style.setProperty('--primary-color-hue', 352);
    } else if(color === 'color-4') {
        document.documentElement.style.setProperty('--primary-color-hue', 152);
    } else if(color === 'color-5') {
        document.documentElement.style.setProperty('--primary-color-hue', 202);
    }

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
    if(bg === 'bg-1') {
        document.documentElement.style.setProperty('--light-color-lightness', '95%');
        document.documentElement.style.setProperty('--dark-color-lightness', '17%');
        document.documentElement.style.setProperty('--white-color-lightness', '100%');
    } else if(bg === 'bg-2') {
        document.documentElement.style.setProperty('--light-color-lightness', '15%');
        document.documentElement.style.setProperty('--dark-color-lightness', '95%');
        document.documentElement.style.setProperty('--white-color-lightness', '20%');
    } else if(bg === 'bg-3') {
        document.documentElement.style.setProperty('--light-color-lightness', '0%');
        document.documentElement.style.setProperty('--dark-color-lightness', '95%');
        document.documentElement.style.setProperty('--white-color-lightness', '10%');
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