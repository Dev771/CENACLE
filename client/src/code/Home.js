import React from 'react'

import BodyLeft from '../components/HomeBody/Left';
import MainBody from '../components/HomeBody/MainBody';
import Mobile_Navbar from '../components/HomeBody/Mobile_Navbar';
import BodyRight from '../components/HomeBody/Right';

const Home = () => {

    

    return (
        <div>                    
            {/* <!-- *********** MAIN (For left, middle and right)************--> */}
            <main>
                <div className="container">
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
           
        </div>
    )
}

export default Home
