import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DropdownSplitButton from '../DropdownSplitButton';
import './Header.css';
import logo from './logo.png';

function Header({user, handleLogOut}) {
    return (
        <div className='navbar navbar-expand-md navbar-light fixed-top bg-light d-flex justify-content-between'>
            <Link to='/' className='navbar-brand d-flex justify-content-between col-6'>
                <img src={logo} className='mr-2' width='36' height='36'/>
                <strong>АРМ - ЗВІТ v2.0</strong>
            </Link>
            {
                user ? (
                    <DropdownSplitButton user={user} handleLogOut={handleLogOut}/>
                ) : (
                    null
                )
            }
        </div>
    );
}

Header.propTypes = {
    user: PropTypes.object,
    handleLogOut: PropTypes.func
};

export default Header;

