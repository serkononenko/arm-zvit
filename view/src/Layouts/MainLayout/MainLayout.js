import React from 'react';
import PropTypes from 'prop-types';
import './MainLayout.css';

export default function MainLayout(props) {
    return (
        <div className='MainLayout'>{ props.children }</div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.element
};