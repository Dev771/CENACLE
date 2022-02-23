import React from 'react'
import './Mobile.css'
import { Home } from '@material-ui/icons';

const Mobile_Navbar = () => {
  return (
    <div className='BottomNav'> 
        <ul>
            <li> 
              <span href='/' className="menu-item1 active" >
                <i className="uil uil-user"></i>
              </span>
            </li>
            <li> 
              <span href='/' className="menu-item1 active">
                <i className="uil uil-bell"></i>
              </span>
            </li><li> 
              <span href='/' className="menu-item1 active">
                <i className="uil uil-home active"></i>
              </span>
            </li><li> 
              <span href='/' className="menu-item1 active">
                <i className="uil uil-envelopes"></i>
              </span>
            </li><li> 
              <span href='/' className="menu-item1 active">
                <i className="uil uil-palette"></i>
              </span>
            </li>
        </ul>
    </div>

  )
}

export default Mobile_Navbar