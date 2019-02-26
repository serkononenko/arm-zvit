import React from 'react';

import './FormLayout.css';

export default function FormLayout(props) {
    return (
        <div className='FormLayout'>
            { props.children }
        </div>
    )
}