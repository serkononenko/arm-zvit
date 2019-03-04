import React from 'react';
import './ContentLayout.css';

const ContentLayout = (props) => {
    return (
        <div className='ContentLayout'>
            {props.children}
        </div>
    )
}

export default ContentLayout;