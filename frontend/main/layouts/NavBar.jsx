import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="nav-brand">
            <i className="fa-solid fa-bolt"></i> Travel Aide
        </a>
        <ul className="nav-desktop-menu" id="desktopMenu">
            <li className="active" data-tab="home"><a>Home</a></li>
            <li data-tab="rides"><a>Rides</a></li>
            <li data-tab="wallet"><a>Wallet</a></li>
            <li data-tab="profile"><a>Profile</a></li>
        </ul>
        <div className="nav-profile">
            <div className="avatar">G</div>
        </div>
    </nav>
  )
}

export default NavBar