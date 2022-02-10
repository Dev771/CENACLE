import React from 'react'

const Right = () => {
    return (
        <div>
            <div className="right">
                        <div className="messages">
                                <div className="headings">
                                    <h4>Messages</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                    <i className="uil uil-search"></i>
                                    <input type="search" placeholder="search messages" id="messages-search" />
                            </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                    <h6 className="active">Primary</h6>
                                    <h6 >General</h6>
                                    <h6 className="message-requests">Request(7)</h6>
                            </div>
                            
                                {/* <!-----------------------------------MESSAGE--------------> */}
                                <div className="message">
                                    <div className="profile-picture">
                                        <img src="img/Profile1.jpg" />

                                    </div>
                                    <div className="message-body">
                                        <h5>Anny Quist</h5>
                                        <p className="text-muted">how are you!!</p>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="profile-picture">
                                        <img src="img/Profile1.jpg" />

                                    </div>
                                    <div className="message-body">
                                        <h5>Nigga</h5>
                                        <p className="text-muted">how are you!!</p>
                                    </div>
                                </div>

                        </div>
                                {/* <!----------------------------END OF MESSAGES---------------> */}

                                {/* <!----------------------------FRIEND REQUESTS---------------> */}
                                <div className="friend-requests">
                                    <h4>Requests</h4>
                                    {/* <!--Request  1--> */}
                                    <div className="requests">
                                        <div className="info">
                                            <div className="profile-picture">
                                                <img src="img/Profile1.jpg" />
                                            </div>
                                            <div>
                                                <h5>Hajia bintu</h5>
                                                <p className="text-muted">
                                                    8 mutual friends
                                                </p>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <button className="btn btn-primary">
                                                Accept
                                            </button>
                                            <button className="btn">
                                                Decline
                                            </button>
                                            </div>
                                    </div>
                                </div>
                        
                    </div> 
        </div>
    )
}

export default Right
