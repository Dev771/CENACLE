import React , {useEffect, useState} from 'react'
import './Mobile.css'
import { useNavigate } from 'react-router-dom';
// import { Home } from '@material-ui/icons';
import Theme from '../Theme/Theme';

const Mobile_Navbar = () => {

  const [active , setactive] = useState("home");
  const [ThemeM , setThemeM ] = useState(false);
  const navigate = useNavigate();
  const User =JSON.parse(localStorage.getItem('profile'));
  const [color , setColor ] = useState('color-1');
  const [ Font, setFont ] = useState('font-size-3');
  const [ bg, setBg ] = useState('bg-1');

  const handleclick = (name) => {
    setactive(name);
   
    {name === "profile" ? navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`) 
    : name === "theme"  ? setThemeM(true)
    : name === "search" ? navigate(`/`)
    : name === "home" ? navigate(`/`)
    : navigate(`/`)
    }
 
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


  // useEffect(() => {
  //  console.log(active);
  // } , [active] )

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
    </div>

    // <div class="bottom-nav">
    //   <input type="radio" name="radio" value="1" id="tab-1" />
    //   <label class="icon home" for="tab-1">
    //     <ion-icon name="home-outline"></ion-icon>
    //     <ion-icon class="fill" name="home"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="2" id="tab-2" checked/>
    //   <label class="icon cart" for="tab-2">
    //     <ion-icon name="cart-outline"></ion-icon>
    //     <ion-icon class="fill" name="cart"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="3" id="tab-3" />
    //   <label class="icon fav" for="tab-3">
    //     <ion-icon name="heart-outline"></ion-icon>
    //     <ion-icon class="fill" name="heart"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="4" id="tab-4" />
    //   <label class="icon profile" for="tab-4">
    //     <ion-icon name="person-outline"></ion-icon>
    //     <ion-icon class="fill" name="person"></ion-icon>
    //   </label>

    // </div>

  )
}

export default Mobile_Navbar