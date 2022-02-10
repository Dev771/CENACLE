import React from 'react'

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
           
        </div>
    )
}

export default Home
