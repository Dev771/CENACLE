import React from 'react'
import image1 from '../../public/assets/img/';

const Home = () => {
    return (
        <div>
            <nav>
         <div class="container">
             <h2 class="logo">
                 Social_Media
             </h2>
             <div class="search-bar">
                <i class="uil uil-search"></i>
                <input type="search" placeholder="Search for Creators, Ispiration, and people" />
             </div>
             <div class="create">
                 <label class="btn btn-primary" for="create-post">Create</label>
             </div>
             <div class="profile-picture">
                 <img src={img.image1.jpg} />
             </div>
         </div>
     </nav>
     {/* <!-- *********** MAIN (For left, middle and right)************--> */}
     <main>
         <div class="container">
             {/* <!--*****************Left******************--> */}
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
                     <a class="menu-item" id="theme">
                        <span></span><i class="uil uil-palette"></i><h3>Themes</h3>
                     </a>
                     <a class="menu-item">
                        <span></span><i class="uil uil-setting"></i><h3>Settings</h3>
                     </a>
                </div>
                 {/* <!--*******************End of Sidebar********************--> */}
                 <label for="create-post" class="btn btn-primary">Create Post</label>
             </div>
             {/* <!--*******************************End of left***************************--> */}

             {/* <!--*****************Middle******************--> */}
             <div class="middle">
                 {/* <!--****Stories****--> */}
                  {/* <!--<div class="stories">
                     <div class="story">
                         <div class="profile-picture">
                             <img src="/image4.jpg " />
                         </div>
                         <p class="name">Your Story</p>
                     </div>
                     <div class="story">
                        <div class="profile-picture">
                            <img src="/image3.jpg ">
                        </div>
                        <p class="name">Name James</p>
                    </div><div class="story">
                        <div class="profile-picture">
                            <img src="/image7.jpg ">
                        </div>
                        <p class="name">Winnie Hale</p>
                    </div><div class="story">
                        <div class="profile-picture">
                            <img src="/image6.jpg ">
                        </div>
                        <p class="name">Anita</p>
                    </div><div class="story">
                        <div class="profile-picture">
                            <img src="/image8.jpg ">
                        </div>
                        <p class="name">Lisa</p>
                    </div>
                    <div class="story">
                        <div class="profile-picture">
                            <img src="/image9.jpg ">
                        </div>
                        <p class="name">Reeta Mann</p>
                    </div>
                  </div>
                --> */}
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
             {/* <!--####################################END OF MIDDLE#######################################--> */}
{/*  */}
             {/* <!--*****************Right******************--> */}
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
             {/* <!---######################END OF RIGHT#######################--> */}
         </div>  
     </main> 

 {/* <!---#######################THEME CUSTOMIZATION###############--> */}
 <div class="customize-theme">
     <div class="card">
          <h2>Customize your view</h2>
          <p class="text muted">Manage your font size , color, and background.</p>
          {/* <!---------------------------FONT SIZES-----------------> */}
          <div class="font-size">
               <h4>Font Size</h4>
                 <div>
                     <h6>Aa</h6>
                     <div class="choose-size">
                         <span class="font-size-1"></span>
                         <span class="font-size-2 active"></span>
                         <span class="font-size-3"></span>
                         <span class="font-size-4"></span>
                         <span class="font-size-5"></span>
                     </div>
                     <h3>Aa</h3>
                 </div>
          </div>
             {/* <!----------------------PRIMARY COLORS--------------------------> */}
             <div class="color">
                   <h4>colors</h4>
                   <div class="choose-color">
                     <span class="color-1 active"></span>
                     <span class="color-2 "></span>
                     <span class="color-3 "></span>
                     <span class="color-4 "></span>
                     <span class="color-5 "></span>
                   </div>
             </div>
             
                 {/* <!-----------------------BACKGROUND COLORS---------------------------> */}
                 <div class="background">
                     <h4>Background</h4>
                     <div class="choose-bg">
                         <div class="bg-1 active">
                             <span></span>
                             <h5 for="bg-1">Light</h5>
                         </div>
                         <div class="bg-2">
                             <span></span>
                             <h5>Dim</h5>
                         </div>
                         <div class="bg-3">
                             <span></span>
                             <h5 for="bg-3">Lights Out</h5>
                         </div>
                     </div>
                 </div>
     </div>
 </div> 
        </div>
    )
}

export default Home
