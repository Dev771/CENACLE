import React, { useState, useEffect } from 'react'
import Theme from '../Theme/Theme';
import { Avatar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Left = () => {


    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [active , setactive ] = useState(false);
    const [color , setColor ] = useState(User?.result?.theme.color);
    const [ Font, setFont ] = useState('font-size-3');
    const [ bg, setBg ] = useState(User?.result?.theme?.background);
    console.log(bg);
    const navigate = useNavigate();
    
    const OpenTheme = (click) => {
        setactive(click);
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

        async function color(color) {
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
        }

        background(bg);
        color(color);



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


    }, [Font, User?.result?.theme.background, bg, color]);


    return (
        <div>
            <div className="left">
                {User ? (
                    <span className="profile" onClick={() => navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`)}>
                        <div className="profile-picture">
                            <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result?.name} src={User?.result?.imageUrl} >{User?.result?.name.charAt(0)}</Avatar>
                        </div>
                        <div className="handle">
                            <h4>{User?.result?.name}</h4>
                            <label className="text-muted">
                                @{User?.result?.name}
                            </label>
                        </div>
                    </span> 
                    ) : (
                    <></>
                )}
                {/* <!--*****************Sidebar******************--> */}
                <div className="sidebar">
                    <span href='/' className="menu-item active">
                        <i className="uil uil-home"></i>
                    <h3>Home</h3>
                    </span>
                    
                    <span href='/' className="menu-item " id="notifications"><i className="uil uil-bell"><small className="notification-count">9+</small></i>
                    <h3>Notification</h3>
                    </span>
                    <span href='/' className="menu-item" id="messages-notification"><i className="uil uil-envelopes"><small className="notification-count">6</small></i>
                     <h3>Messages</h3>
                    </span>
                    
                    <span className='menu-item' onClick={() => OpenTheme(true)}>
                        <i className="uil uil-palette"></i><h3>Theme</h3>
                    </span>
                        <span className="menu-item" href='/'><i className="uil uil-setting"></i><h3>Settings</h3></span>
                </div>
                {/* <!--*******************End of Sidebar********************--> */}
                <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
            </div> 
            {active ? ( 
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
    )
}

export default Left
