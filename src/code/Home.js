import React from 'react'

import Theme from '../components/Theme/Theme';
import BodyLeft from '../components/HomeBody/Left';
import MainBody from '../components/HomeBody/MainBody';
import BodyRight from '../components/HomeBody/Right';

const Home = () => {
    return (
        <div>                    
            {/* <!-- *********** MAIN (For left, middle and right)************--> */}
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
                </div>  
            </main> 
            {/* <!---########      ###############THEME CUSTOMIZATION###############--> */}
            <Theme />
        </div>
    )
}

export default Home
