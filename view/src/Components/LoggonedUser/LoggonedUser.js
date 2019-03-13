import React from 'react';
import { Link } from 'react-router-dom';

import './LoggonedUser.css';

const LoggonedUser = (props) => {
    return (
        <Link to='#' className='loggoned-user'>{props.user}</Link>
    )
};

export default LoggonedUser;