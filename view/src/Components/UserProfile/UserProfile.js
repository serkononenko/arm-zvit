import React from 'react';
import './UserProfile.css';

const ContentLayout = React.lazy(() => import('../../Layouts/ContentLayout/ContentLayout'));

const UserProfile = (props) => {
    return (
        <ContentLayout>
            <h1>Hello {props.user}</h1>
        </ContentLayout>
    )
};

export default UserProfile;