import React from 'react';

import ContentLayout from '../../Layouts/ContentLayout/ContentLayout';
import DepartmentInput from '../Forms/DepartmentForm/DepartmentInput';
import DepartmentList from '../DepartmentList/DepartmentList';
import UserList from '../UserList/UserList';
import ImportReport from '../ImportReport/ImportReport';

export default function MainPage(props) {
    return (
        <ContentLayout>
            <DepartmentInput />
            <ImportReport />
            <UserList />
            <DepartmentList />
        </ContentLayout>
    )
}