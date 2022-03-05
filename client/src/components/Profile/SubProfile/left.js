import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Left = () => {


    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [active , setactive ] = useState(false);
    const navigate = useNavigate();


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
                <div className="sidebar">
                    <a href='/' className="menu-item">
                        <span><i className="uil uil-home"></i></span><h3>Profile</h3>
                    </a>
                    <a href='/' className="menu-item " id="notifications">
                        <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span><h3>Notification</h3>
                    </a>
                    <a href='/' className="menu-item" id="messages-notification">
                        <span><i className="uil uil-envelopes"><small className="notification-count">6</small></i></span><h3>Messages</h3>
                    </a>
                    <span className='menu-item'>
                        <i className="uil uil-palette"></i><h3>Theme</h3>
                    </span>
                    <a className="menu-item" href='/'>
                        <span></span><i className="uil uil-setting"></i><h3>Settings</h3>
                    </a>
                </div>
                <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
            </div> 
        </div>
    )
}

export default Left
