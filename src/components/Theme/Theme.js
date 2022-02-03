import React, { useState } from 'react'
import './stylet.css';

const Theme = (active,setactive) => {

    const [close, setclose] = useState(true);

    const handleClick = () => {
        // alert(1);
        setclose(!close);
       

    }

    return (
            <div class="customize-theme" style={close ? {diplay:"grid"} : {diplay : "none"}}>
                <div class="card">
                    <h2>Customize your view</h2>
                    <p class="text muted">Manage your font size , color, and background.</p>
                    <input type="button" value="close" onClick={handleClick}>
                        </input>
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
    )
}

export default Theme
