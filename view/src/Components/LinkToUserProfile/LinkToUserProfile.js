import React from 'react';
import { Link } from 'react-router-dom';

import './LinkToUserProfile.css';

const LinkToUserProfile = (props) => {
    return (
        <Link 
            to={`profile/${props.user._id}`} 
            className={props.className}>
            {props.user.login}
        </Link>
    )
};

export default LinkToUserProfile;