import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
    return (
      <div className="navbarContainer">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="left">
            <div className="logoName">
              <p className="firstName">R</p>
              <p className="lastName">N</p>
            </div>
          </div>
        </Link>
        <div className="right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Stacks</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
}

export default NavBar
