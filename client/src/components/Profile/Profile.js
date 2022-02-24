import React from 'react';
import Theme from '../Theme/Theme';
import BodyLeft from './SubProfile/left';
import MainBody from './SubProfile/Middle';
import BodyRight from './SubProfile/Right';
import Mobile_Navbar from '../HomeBody/Mobile_Navbar';

import './Styles.css';

const Profile = () => {
    return (
        <div>
            <main>
                <div class="container">
                    {/* <!--*****************Left******************--> */}
                    <BodyLeft />
                    {/* <!--*******************************End of left***************************--> */}

                    {/* <!--*****************Middle******************--> */}
                    <MainBody />
                    {/* <!--####################################END OF MIDDLE#######################################--> */}
                    {/*  */}
                    {/* <!--*****************Right******************--> */}
                    <BodyRight />
                    {/* <!---######################END OF RIGHT#######################--> */}
                    <Mobile_Navbar className="Mob_nav" />
                </div>  
            </main> 
            {/* <!---########      ###############THEME CUSTOMIZATION###############--> */}
            {/* <Theme /> */}
        </div>
    );
};

export default Profile;
