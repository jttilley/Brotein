import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function classToggle() {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

// document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);


function Navbar() {

    return (


        <nav className='navbar'>
            <div className='navbar-container'>
                <li className='nav-item'>
                    <Link
                        to='/home'
                        className='nav-links'

                    >
                        Home
                            </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/health'
                        className='nav-links'

                    >
                        Health
                            </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/history'
                        className='nav-links'

                    >
                        History
                            </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/new-meal'
                        className='nav-links'

                    >
                        New Meal
                            </Link>
                </li>

                <li className='nav-item'>
                    <Link
                        to='/new-workout'
                        className='nav-links'

                    >
                        New Workout
                            </Link>
                </li>


                <li className='nav-item'>
                    <Link
                        to='/'
                        className='nav-links'

                    >
                        Logout
                                </Link>
                </li>

            </div>
        </nav >



    );
}

export default Navbar;