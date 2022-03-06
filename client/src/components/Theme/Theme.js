import React from 'react'
import './stylet.css';

const Theme = ({ themeClose, theme, color, Font, bg }) => {

    return (
            <div className="customize-theme">
                <div className="card">
                    <input type="button" className='closeButton' value="X" onClick={() => themeClose(false)} />
                    <h2>Customize your view</h2>
                    <p className="text muted">Manage your font size , color, and background.</p>
                    {/* <!---------------------------FONT SIZES-----------------> */}
                    {/* <div className="font-size">
                        <h4>Font Size</h4>
                            <div>
                                <h6>Aa</h6>
                                <div className="choose-size">
                                    <span onClick={() => theme('font', 'font-size-1')} className={`font-size-1 ${Font === 'font-size-1' ? 'active' : ''}`} ></span>
                                    <span onClick={() => theme('font', 'font-size-2')} className={`font-size-2 ${Font === 'font-size-2' ? 'active' : ''}`} ></span>
                                    <span onClick={() => theme('font', 'font-size-3')} className={`font-size-3 ${Font === 'font-size-3' ? 'active' : ''}`} ></span>
                                    <span onClick={() => theme('font', 'font-size-4')} className={`font-size-4 ${Font === 'font-size-4' ? 'active' : ''}`} ></span>
                                    <span onClick={() => theme('font', 'font-size-5')} className={`font-size-5 ${Font === 'font-size-5' ? 'active' : ''}`} ></span>
                                </div>
                                <h3>Aa</h3>
                            </div>
                    </div> */}
                    {/* <!----------------------PRIMARY COLORS--------------------------> */}
                    <div className="color">
                        <h4>colors</h4>
                        <div className="choose-color">
                            <span onClick={() => theme('color', 'color-1')} className={`color-1 ${color === 'color-1' ? 'active' : ''}`}></span>
                            <span onClick={() => theme('color', 'color-2')} className={`color-2 ${color === 'color-2' ? 'active' : ''}`}></span>
                            <span onClick={() => theme('color', 'color-3')} className={`color-3 ${color === 'color-3' ? 'active' : ''}`}></span>
                            <span onClick={() => theme('color', 'color-4')} className={`color-4 ${color === 'color-4' ? 'active' : ''}`}></span>
                            <span onClick={() => theme('color', 'color-5')} className={`color-5 ${color === 'color-5' ? 'active' : ''}`}></span>
                        </div>
                    </div>
                        
                    {/* <!-----------------------BACKGROUND COLORS---------------------------> */}
                    <div className="background">
                        <h4>Background</h4>
                        <div className="choose-bg">
                            <div onClick={() => theme('bg', 'bg-1')} className={`bg-1 ${bg === 'bg-1' ? 'active' : ''}`}>
                                <span></span>
                                <h5 htmlFor="bg-1">Light</h5>
                            </div>
                            <div onClick={() => theme('bg', 'bg-2')} className={`bg-2 ${bg === 'bg-2' ? 'active' : ''}`}>
                                <span></span>
                                <h5>Dim</h5>
                            </div>
                            <div onClick={() => theme('bg', 'bg-3')} className={`bg-3 ${bg === 'bg-3' ? 'active' : ''}`}>
                                <span></span>
                                <h5 htmlFor="bg-3">Lights Out</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
    )
}

export default Theme
