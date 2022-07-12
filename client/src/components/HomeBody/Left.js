import React, { useState, useEffect } from 'react'
import Theme from '../Theme/Theme';
import { Avatar } from '@material-ui/core';
import { useNavigate ,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChangeTheme } from '../../actions/Auth';

const Left = () => {


    const User = JSON.parse(localStorage.getItem('profile'));
    const [active , setactive ] = useState(false);
    const [color , setColor ] = useState(User?.result?.theme?.color || User?.data?.theme?.color || "color-1");
    const [ Font, setFont ] = useState('font-size-3');
    const [ bg, setBg ] = useState(User?.result?.theme?.background || User?.data?.theme?.background || "bg-1");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const OpenTheme = (click) => {
        setactive(click);
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
            <div className="left">
                {User ? (
                    <span className="profile" onClick={() => navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`)}>
                        <div className="profile-picture">
                        {User?.result.imageURL ? 
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                :
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageUrl} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                }
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
                        {location.pathname.split("/")[1] === "" ? (
                            <>
                            <i className="uil uil-home"></i>
                            <h3>Home</h3>
                            </>
                        ):
                        (
                            <>
                            <i className="uil uil-user"></i>
                            <h3>Profile</h3>  
                            </>
                        )}
                    </span>
                    
                    <span href='/' className="menu-item NO" id="notifications"><i className="uil uil-bell"><small className="notification-count">9+</small></i>
                    <h3>Notification</h3>
                    </span>
                    <span onClick={() => navigate("/Messsages")} className="menu-item" id="messages-notification"><i className="uil uil-envelopes"><small className="notification-count">6</small></i>
                     <h3>Messages</h3>
                    </span>
                    
                    <span className='menu-item' onClick={() => OpenTheme(true)}>
                        <i className="uil uil-palette"></i><h3>Theme</h3>
                    </span>
                        <span className="menu-item NO" href='/'><i className="uil uil-setting"></i><h3>Settings</h3></span>
                </div>
                {/* <!--*******************End of Sidebar********************--> */}
                {User ? (
                    <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
                ):
                (
                 <></>   
                )
                }
                <div className="CreatorName">
                   <div>
                Made with Love <i class="uil uil-heart" style={{color : "red"}}></i> <br />
                by &nbsp;
                   <a href="https://www.linkedin.com/in/dev-garg-a5b012182/" className='linkden'>Dev G </a> &nbsp; | &nbsp;
                   <a href="https://www.linkedin.com/in/naman-bhateja-018392171/" className='linkden'>Naman B </a> &nbsp;| &nbsp;
                   <a href="https://www.linkedin.com/in/heygaurav07/" className='linkden'>Gaurav S </a>   
                   </div>
                   <div className='copyright'><i class="uil uil-copyright"></i>Copyright: Cenacle Tech Lab</div>
                </div> 
                
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
