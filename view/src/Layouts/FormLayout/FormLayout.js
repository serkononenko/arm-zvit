import React from 'react';

import './FormLayout.css';

const FormLayout = (props) => {
    return (
        <div className='FormLayout'>
            {props.children}
        </div>
    )
}

export default FormLayout;