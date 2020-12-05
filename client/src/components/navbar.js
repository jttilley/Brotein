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
                {/* //<Link to='' className='navbar-logo' onClick={closeMobileMenu}>

                        <i className='fab fa-typo3' />
                    </Link> */}
                {/* // <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div> */}
                {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'> */}
                {/* <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home

                            </Link> */}
                {/* </li> */}
                <li className='nav-item'>
                    <Link
                        to='/health'
                        className='nav-links'
                    // onClick={closeMobileMenu}
                    >
                        Health
                            </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/history'
                        className='nav-links'
                    // onClick={closeMobileMenu}
                    >
                        History
                            </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/new-meal'
                        className='nav-links'
                    // onClick={closeMobileMenu}
                    >
                        New Meal
                            </Link>
                </li>

                <li className='nav-item'>
                    <Link
                        to='/new-workout'
                        className='nav-links'
                    // onClick={closeMobileMenu}
                    >
                        New Workout
                            </Link>
                </li>


                <li className='nav-item'>
                    <Link
                        to='/signin'
                        className='nav-links'

                    >
                        Logout
                                </Link>
                </li>

            </div>
        </nav>



    );
}

export default Navbar;