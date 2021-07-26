import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav-container">

            <div className="nav-left">
                <p className="today-date">23 July 2021</p>
            </div>

            <div className="nav-center">

            </div>

            <div className="nav-right">
                <div className="navbar">
                    <ul className="items">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            Breaking News
                        </li>
                        <li className="nav-item">
                            Contact Us
                        </li>
                        <li className="nav-item">
                            Videos
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
