import React from 'react'

const Middle = () => {
    return (
        <div>
            <div class="middle">
                {/* <!--******************* End of Stories*****************-->  */}
                <form class="create-post">
                    <div class="profile-picture">
                        <img src="img/Profile1.jpg" />
                    </div>
                    <input type="text" placeholder="What's on your mind Diana?" id="create-post" />
                    <input type="submit" value="post" class=" btn btn-primary" />
                </form>

                {/* <!--*******************************FEEDS******************************--> */}
                <div class="feeds">
                    {/* <!--***********************************FEEDS 1*************************************--> */}
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-picture">
                                <img src="img/image15.jpg" />
                                </div>
                                <div class="ingo">
                                    <h3>Lana Rose</h3>
                                    <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                            </div>
                            <span class="edit">
                            <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="img/image6.jpg" />
                        </div>

                        <div class="action-buttons ">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart-alt"></i></span>
                                <span><i class="uil uil-comment"></i></span>
                                <span><i class="uil uil-share"></i></span>
                            </div>
                            <div class="bookmark">
                            <span><i class="uil uil-bookmark-full"></i></span>
                            </div>            
                        </div>
                    
                        <div class="liked-by">
                            <span><img src="img/image15.jpg" /></span>
                            <span><img src="img/image13.jpg" /></span>
                            <span><img src="img/image4.jpg" /></span>
                            <p>Liked by <b>Ernest Achiever</b> and <b>2,323 others </b></p>
                        </div>

                        <div class="caption">
                            <p><b>Lana Rose</b> Lorem ipsum dolor sit quisqum eius.
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>
                        <div class="comments text-muted">View all 277 comments</div>
                    </div>
                    {/* <!--***************************END OF FEED 1***********************************--> */}
                </div>
                {/* <!--***********************************END OF FEEDS*******************************--> */}
            </div>
        </div>
    )
}

export default Middle;
