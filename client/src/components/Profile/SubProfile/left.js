import React from 'react'

const left = () => {
    return (
        <div>
            <div className="left">
                <a href='/' className="profile">
                    <div className="profile-picture">
                        <img alt='' src="img/Profile1.jpg" />
                    </div>
                    <div className="handle">
                        <h4>Diana Pyi</h4>
                        <p className="text-muted">
                            @dayi
                        </p>
                    </div>
                </a>
                {/* <!--*****************Sidebar******************--> */}
                <div className="sidebar">
                    <a href='/' className="menu-item active">
                        <span><i className="uil uil-home"></i></span><h3>Home</h3>
                    </a>
                    <a href='/' className="menu-item">
                        <span><i className="uil uil-compass"></i></span><h3>Explore</h3>
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
                    <a href='/' className="menu-item">
                        <span></span><i className="uil uil-bookmark"></i><h3>Bookmarks</h3>
                    </a>
                    <a href='/' className="menu-item">
                        <span></span><i className="uil uil-chart-line"></i><h3>Analytics</h3>
                    </a>
                    <a href='/' className="menu-item" id="theme">
                        <span></span><i className="uil uil-palette"></i><h3>Themes</h3>
                    </a>
                    <a href='/' className="menu-item">
                        <span></span><i className="uil uil-setting"></i><h3>Settings</h3>
                    </a>
                </div>
                {/* <!--*******************End of Sidebar********************--> */}
                <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
            </div>  
        </div>
    )
}

export default left
