import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkToUserProfile = ({ user, className }) => {
    return (
        <Link 
            to={`/profile/${user._id}`}
            replace 
            className={className}>
            {user.login}
        </Link>
    );
};

LinkToUserProfile.propTypes = {
    user: PropTypes.object,
    className: PropTypes.string
};

export default LinkToUserProfile;