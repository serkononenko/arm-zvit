import React from 'react';
import PropTypes from 'prop-types';

const FormLayout = (props) => {
    return (
        <div className='col-12 col-sm-8 col-md-6 col-lg-4 mx-auto text-center shadow-lg p-3 mb-5 mt-5 bg-light rounded'>
            {props.children}
        </div>
    );
};

FormLayout.propTypes = {
    children: PropTypes.element
};

export default FormLayout;