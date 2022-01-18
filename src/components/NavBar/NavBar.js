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
                    <label class="btn btn-primary" for="create-post">Create</label>
                </div>
                <div class="profile-picture">
                    <img src={img} alt='' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
