import React from 'react';
import PropTypes from 'prop-types';
import './FormLayout.css';

const FormLayout = (props) => {
    return (
        <div className='FormLayout'>
            {props.children}
        </div>
    );
};

FormLayout.propTypes = {
    children: PropTypes.element
};

export default FormLayout;