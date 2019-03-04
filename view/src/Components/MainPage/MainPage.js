import React from 'react';
import ContentLayout from '../../Layouts/ContentLayout/ContentLayout';
import DepartmentInput from '../Forms/DepartmentForm/DepartmentInput';
import DepartmentList from '../DepartmentList/DepartmentList';

export default function MainPage() {
    return (
        <ContentLayout>
            <DepartmentInput />
            <DepartmentList />
        </ContentLayout>
    )
}