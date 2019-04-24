import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkToUserProfile from './LinkToUserProfile';

const DropdownSplitButton = ({ user, handleLogOut }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className='btn-group'>
            <LinkToUserProfile user={user} className='btn btn-outline-success'/>
            <button className='btn btn-outline-success dropdown-toggle dropdown-toggle-split' onClick={handleClick}>
                <span className='sr-only'>Toggle Dropdown</span>
            </button>
            <div className={isOpen ? 'dropdown-menu d-block' : 'dropdown-menu'}>
                <button className='dropdown-item' onClick={handleLogOut}>Вихід</button>
            </div>
        </div>
    );
};

DropdownSplitButton.propTypes = {
    user: PropTypes.object,
    handleLogOut: PropTypes.func
};

export default DropdownSplitButton;