import React from 'react';
import PropTypes from 'prop-types';
import LinkToUserProfile from '../LinkToUserProfile/LinkToUserProfile';

const UserList = ({ userlist }) => {
    return (
        <div className='list-group'>
            {
                userlist.map((item) => <LinkToUserProfile 
                    key={item._id} 
                    user={item} 
                    className='list-group-item list-group-item-action'
                />)
            }
        </div>
    );
};

UserList.propTypes = {
    userlist: PropTypes.object
};

export default UserList;