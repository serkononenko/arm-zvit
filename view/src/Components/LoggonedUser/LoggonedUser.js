import React from 'react';
import { Link } from 'react-router-dom';

import './LoggonedUser.css';

const LoggonedUser = (props) => {
    return (
        <Link 
            to={{
                pathname: '/profile/',
                search: props.user
            }} 
            className='loggoned-user'>
            {props.user}
        </Link>
    )
};

export default LoggonedUser;