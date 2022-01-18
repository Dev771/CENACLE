import React from 'react'

const Right = () => {
    return (
        <div>
            <div class="right">
                        <div class="messages">
                                <div class="headings">
                                    <h4>Messages</h4><i class="uil uil-edit"></i>
                                </div>
                            
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div class="search-bar">
                                    <i class="uil uil-search"></i>
                                    <input type="search" placeholder="search messages" id="messages-search" />

                            </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div class="category">
                                    <h6 class="active">Primary</h6>
                                    <h6 >General</h6>
                                    <h6 class="message-requests">Request(7)</h6>
                            </div>
                            
                                {/* <!-----------------------------------MESSAGE--------------> */}
                                <div class="message">
                                    <div class="profile-picture">
                                        <img src="img/Profile1.jpg" />

                                    </div>
                                    <div class="message-body">
                                        <h5>Anny Quist</h5>
                                        <p class="text-muted">how are you!!</p>
                                    </div>
                                </div>
                                <div class="message">
                                    <div class="profile-picture">
                                        <img src="img/Profile1.jpg" />

                                    </div>
                                    <div class="message-body">
                                        <h5>Nigga</h5>
                                        <p class="text-muted">how are you!!</p>
                                    </div>
                                </div>

                        </div>
                                {/* <!----------------------------END OF MESSAGES---------------> */}

                                {/* <!----------------------------FRIEND REQUESTS---------------> */}
                                <div class="friend-requests">
                                    <h4>Requests</h4>
                                    {/* <!--Request  1--> */}
                                    <div class="requests">
                                        <div class="info">
                                            <div class="profile-picture">
                                                <img src="img/Profile1.jpg" />
                                            </div>
                                            <div>
                                                <h5>Hajia bintu</h5>
                                                <p class="text-muted">
                                                    8 mutual friends
                                                </p>
                                            </div>
                                        </div>
                                        <div class="action">
                                            <button class="btn btn-primary">
                                                Accept
                                            </button>
                                            <button class="btn">
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
