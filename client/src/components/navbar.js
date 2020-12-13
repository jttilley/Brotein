import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function classToggle() {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}


function Navbar() {

    return (

        <header>
            <label htmlFor="toggle-1" className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
            <input type="checkbox" id="toggle-1" />

            <nav>

                <ul className="nav-link">
                    <li className="nav-link">

                        <Link
                            to='/home'
                            className='nav-links'

                        >
                            Home
                            </Link>
                    </li>
                    <li  className="nav-link">
                        <Link
                            to='/health'
                            className='nav-links'

                        >
                            Health
                            </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            to='/history'
                            className='nav-links'

                        // label="History"
                        >
                            History
                            </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            to='/new-meal'
                            className='nav-links'

                        // label="New Meal"
                        >
                            New Meal
                            </Link>
                    </li>

                    <li className="nav-link">
                        <Link
                            to='/new-workout'
                            className='nav-links'

                        // label="New Workout"
                        >
                            New Workout
                            </Link>
                    </li>


                    <li className="nav-link">
                        <Link
                            to='/'
                            className='nav-links'
                            label="Logout"
                        >
                            Logout
                                </Link>
                    </li>
                </ul>

            </nav >
        </header>


    );
}

export default Navbar;