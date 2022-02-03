import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Theme from '../Theme/Theme';


const Left = () => {

    const [active , setactive ] = useState(false);
   

    const handleclick = () => { 
        // alert(active);
        setactive(!active);
        // document.getElementById("profile")
        // alert(active);

    }
    // useEffect(() => {
    //     if (active) {alert(1)}
    
 
    // }, [] );

    return (
        <div>
            <div class="left">
                <a class="profile">
                    <div class="profile-picture">
                        <img src="img/Profile1.jpg" />
                    </div>
                    <div class="handle">
                        <h4>Diana Pyi</h4>
                        <pi class="text-muted">
                            @dayi
                        </pi>
                    </div>
                </a>
                {/* <!--*****************Sidebar******************--> */}
                <div class="sidebar">
                    <a class="menu-item active">
                        <span><i class="uil uil-home"></i></span><h3>Home</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-compass"></i></span><h3>Explore</h3>
                    </a>
                    <a class="menu-item " id="notifications">
                        <span><i class="uil uil-bell"><small class="notification-count">9+</small></i></span><h3>Notification</h3>
                        {/* <!--     Notification Popup    --> */}
                        <div class="notifications-popup">
                        <div>
                            <div class="profile-picture">
                                <img src="img/image1.jpg" />
                            </div>
                            <div class="notification-body">
                                <b>Keke Benjamin</b> accepted your friend request
                                <small class="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div class="profile-picture">
                                <img src="img/image2.jpg" />
                            </div>
                            <div class="notification-body">
                                <b>Ayevhor Mensah</b>  Commented on your post
                                <small class="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div class="profile-picture">
                                <img src="img/image3.jpg" />
                            </div>
                            <div class="notification-body">
                                <b>Marry opong</b> and 283 others liked your psot
                                <small class="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        <div>
                            <div class="profile-picture">
                                <img src="img/image4.jpg" /> 
                            </div>
                            <div class="notification-body">
                                <b>Doris Y.Lartey</b> commented on a post you're tagged in
                                <small class="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>
                        </div>
                    </a>
                    {/* <!--****************End Notification Popup*********************--> */}
                    
                    
                    <a class="menu-item" id="messages-notification">
                        <span><i class="uil uil-envelopes"><small class="notification-count">6</small></i></span><h3>Messages</h3>
                    </a>
                    <a class="menu-item">
                        <span></span><i class="uil uil-bookmark"></i><h3>Bookmarks</h3>
                    </a>
                    <a class="menu-item">
                        <span></span><i class="uil uil-chart-line"></i><h3>Analytics</h3>
                    </a>
                    {/* <button class="menu-item" id="theme" type="button" onClick={ () => {alert(1)}}>
                        <span></span><i class="uil uil-palette"></i><h3>Themes</h3>
                    </button> */}
                    {/* <input type="button" value="theme" class="menu-item" id="theme" onClick={handleclick}>
                    </input> */}
                    <a type="button" value="theme" class="menu-item" id="theme" onClick={handleclick}>
                    <span></span><i class="uil uil-chart-line"></i><h3>Theme</h3>
                    </a>
                    <a class="menu-item">
                        <span></span><i class="uil uil-setting"></i><h3>Settings</h3>
                    </a>
                </div>
                {/* <!--*******************End of Sidebar********************--> */}
                <label for="create-post" class="btn btn-primary">Create Post</label>
            </div> 
            {active ? ( 
                <>
                    <Theme 
                    active={active}
                    setactive={setactive}
                    />
                    <input type="button" value="X" className='close' onClick={handleclick}>
                    
                    </input>
                </> ) : (<></>)} 
          
        </div>

    )
}

export default Left
