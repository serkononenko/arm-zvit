import React from 'react';
import PropTypes from 'prop-types';

const ContentLayout = (props) => {
    return (
        <div className='rounded bg-light shadow-lg col-11 p-3 mt-3 mx-auto'>
            {props.children}
        </div>
    );
};

ContentLayout.propTypes = {
    children: PropTypes.element
};

export default ContentLayout;