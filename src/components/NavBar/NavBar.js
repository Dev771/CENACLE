import React from 'react'
import img from '../../img/image1.jpg'

const NavBar = () => {
    return (
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
                    <a class="btn btn-primary" href='/Form'>Create</a>
                </div>
                <div class="profile-picture">
                    <img src={img} alt='' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
