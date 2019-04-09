import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import ContentLayout from '../../Layouts/ContentLayout/ContentLayout';
import DepartmentInput from '../Forms/DepartmentForm/DepartmentInput';
import DepartmentList from '../DepartmentList/DepartmentList';
import UserList from '../UserList/UserList';
import ImportReport from '../ImportReport/ImportReport';

const AdminPage = ({ match }) => {
    return (
        <ContentLayout>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink to={`/administrator/users`} className='nav-link' activeClassName='active'>Користувачі</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/administrator/departments`} className='nav-link' activeClassName='active'>Відділи</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/administrator/reports`} className='nav-link' activeClassName='active'>Звіти</NavLink>
                    </li>
                </ul>
            </nav>
        
            <Route path={`${match.path}/users`} exact render={() => <UserList />} />
            <Route path={`${match.path}/departments`} render={() => <DepartmentList />} />
            <Route path={`${match.path}/reports`} render={() => <ImportReport />} />
    
        </ContentLayout>
    )
};

export default AdminPage