import React from 'react';

import ContentLayout from '../../Layouts/ContentLayout/ContentLayout';
import DepartmentInput from '../Forms/DepartmentForm/DepartmentInput';
import DepartmentList from '../DepartmentList/DepartmentList';
import UserList from '../UserList/UserList';

export default function MainPage(props) {
    return (
        <ContentLayout>
            <DepartmentInput />
            <button onClick={props.handleLogOut}>Log Out</button>
            <UserList />
        </ContentLayout>
    )
}