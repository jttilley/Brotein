//import React from 'react';
import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
                        home
            <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/health' className='nav-links' onClick={closeMobileMenu}>
                                Health
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/history'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                History
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/new-meal'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                New Meal
              </Link>
                        </li>

                        <li>
                            <Link
                                to='/new-workout'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                New Workout
              </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN OUT</Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;