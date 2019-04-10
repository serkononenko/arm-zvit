import React from 'react';
import PropTypes from 'prop-types';
import './ContentLayout.css';

const ContentLayout = (props) => {
    return (
        <div className='ContentLayout'>
            {props.children}
        </div>
    );
};

ContentLayout.propTypes = {
    children: PropTypes.element
};

export default ContentLayout;