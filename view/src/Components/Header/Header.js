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
        <div className='navbar navbar-expand-md navbar-light fixed-top bg-white'>
            <Link to='/' className='navbar-brand d-flex justify-content-between col-6'>
                <img src={logo} className='mr-2' width='36' height='36'/>
                <strong>АРМ - ЗВІТ v2.0</strong>
            </Link>
            {elem}
        </div>
    );
}

export default Header;

