import React from 'react';
import { Link } from 'react-router-dom';

import './LinkToUserProfile.css';

const LinkToUserProfile = (props) => {
    return (
        <Link 
            to={{
                pathname: '/profile/user',
                search: 'q='+props.user
            }} 
            className={props.className}>
            {props.user}
        </Link>
    )
};

export default LinkToUserProfile;