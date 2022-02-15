import React, { useState, useEffect } from 'react'
import Theme from '../Theme/Theme';
import { Avatar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Left = () => {


    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [active , setactive ] = useState(false);
    const [color , setColor ] = useState('color-1');
    const [ Font, setFont ] = useState('font-size-3');
    const [ bg, setBg ] = useState('bg-1');
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
            <div className="left">
                {User ? (
                    <a className="profile" onClick={() => navigate('/Profile')}>
                        <div className="profile-picture">
                            <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result?.name} src={User?.result?.imageUrl} >{User?.result?.name.charAt(0)}</Avatar>
                        </div>
                        <div className="handle">
                            <h4>{User?.result?.name}</h4>
                            <label className="text-muted">
                                @{User?.result?.name}
                            </label>
                        </div>
                    </a> 
                    ) : (
                    <></>
                )}
                {/* <!--*****************Sidebar******************--> */}
                <div className="sidebar">
                    <a href='/' className="menu-item">
                        <span><i className="uil uil-home"></i></span><h3>Home</h3>
                    </a>
                    <a href='/' className="menu-item " id="notifications">
                        <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span><h3>Notification</h3>
                        {/* <!--     Notification Popup    --> */}
                        <div className="notifications-popup">
                        <div>
                            <div className="profile-picture">
                                <img src="img/image1.jpg" alt='' />
                            </div>
                            <div className="notification-body">
                                <b>Keke Benjamin</b> accepted your friend request
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-picture">
                                <img src="img/image2.jpg" alt='' />
                            </div>
                            <div className="notification-body">
                                <b>Ayevhor Mensah</b>  Commented on your post
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-picture">
                                <img src="img/image3.jpg" alt='' />
                            </div>
                            <div className="notification-body">
                                <b>Marry opong</b> and 283 others liked your psot
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div className="profile-picture">
                                <img src="img/image4.jpg" alt='' /> 
                            </div>
                            <div className="notification-body">
                                <b>Doris Y.Lartey</b> commented on a post you're tagged in
                                <small className="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        </div>
                    </a>
                    {/* <!--****************End Notification Popup*********************--> */}
                    
                    
                    <a href='/' className="menu-item" id="messages-notification">
                        <span><i className="uil uil-envelopes"><small className="notification-count">6</small></i></span><h3>Messages</h3>
                    </a>
                    {/* <button className="menu-item" id="theme" type="button" onClick={ () => {alert(1)}}>
                        <span></span><i className="uil uil-palette"></i><h3>Themes</h3>
                    </button> */}
                    {/* <input type="button" value="theme" className="menu-item" id="theme" onClick={handleclick}>
                    </input> */}
                    <span className='menu-item' onClick={() => OpenTheme(true)}>
                        <i className="uil uil-palette"></i><h3>Theme</h3>
                    </span>
                    <a className="menu-item" href='/'>
                        <span></span><i className="uil uil-setting"></i><h3>Settings</h3>
                    </a>
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
