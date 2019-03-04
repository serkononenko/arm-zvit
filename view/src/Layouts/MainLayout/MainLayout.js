import React from 'react';

import './MainLayout.css'

export default function MainLayout(props) {
    return (
        <div className='MainLayout'>{ props.children }</div>
    )
}