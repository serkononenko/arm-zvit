import React from 'react';
import { Link } from 'react-router-dom';
import LinkToUserProfile from '../LinkToUserProfile/LinkToUserProfile';
import './Header.css';
import logo from './logo.png';

function Header({user, handleLogOut}) {
    const elem = user ? (
        <div className='btn-group dropdown'>
            <LinkToUserProfile user={user} className='btn btn-outline-success'/>
            <button className='btn btn-outline-success dropdown-toggle dropdown-toggle-split'
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
            >
                <span className='sr-only'>Toggle Dropdown</span>
            </button>
            <div className='dropdown-menu'>
                <button className='dropdown-item' onClick={handleLogOut}>Вихід</button>
            </div>
        </div>
    ) : (
        null
    );
    return (
        <div className='navbar navbar-light header shadow-sm p-3 mb-5 bg-white'>
            <Link to='/' className='navbar-brand header__logo logo'>
                <img src={logo} className='img-fluid logo__img' />
                <div className='logo__title'>
                    <h1>АРМ - ЗВІТ v2.0</h1>
                </div>
            </Link>
            {elem}
        </div>
    );
}

export default Header;

