import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkToDepartmentProfile = ({ department, className }) => {
    return (
        <Link
            to={`/department/${department._id}`}
            className={className}
        >
            {department.name}
        </Link>
    );
};

LinkToDepartmentProfile.propTypes = {
    department: PropTypes.object,
    className: PropTypes.string
};

export default LinkToDepartmentProfile;