import React from 'react'
import './Mobile.css'
// import { Home } from '@material-ui/icons';

const Mobile_Navbar = () => {
  return (

    <div className='BottomNav'> 
        <ul>
            <li> 
              <span className="menu-item1 active" >
                <i className="uil uil-user"></i>
              </span>
            </li>
            <li> 
              <span className="menu-item1 active">
                <i className="uil uil-bell"></i>
              </span>
            </li><li> 
              <span className="menu-item1 active">
                <i className="uil uil-home active"></i>
              </span>
            </li><li> 
              <span className="menu-item1 active">
                <i className="uil uil-envelopes"></i>
              </span>
            </li><li> 
              <span className="menu-item1 active">
                <i className="uil uil-palette"></i>
              </span>
            </li>
        </ul>
    </div>

    // <div class="bottom-nav">
    //   <input type="radio" name="radio" value="1" id="tab-1" />
    //   <label class="icon home" for="tab-1">
    //     <ion-icon name="home-outline"></ion-icon>
    //     <ion-icon class="fill" name="home"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="2" id="tab-2" checked/>
    //   <label class="icon cart" for="tab-2">
    //     <ion-icon name="cart-outline"></ion-icon>
    //     <ion-icon class="fill" name="cart"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="3" id="tab-3" />
    //   <label class="icon fav" for="tab-3">
    //     <ion-icon name="heart-outline"></ion-icon>
    //     <ion-icon class="fill" name="heart"></ion-icon>
    //   </label>
      
    //   <input type="radio" name="radio" value="4" id="tab-4" />
    //   <label class="icon profile" for="tab-4">
    //     <ion-icon name="person-outline"></ion-icon>
    //     <ion-icon class="fill" name="person"></ion-icon>
    //   </label>

    // </div>

  )
}

export default Mobile_Navbar