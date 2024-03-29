import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

import ContentLayout from '../Layouts/ContentLayout/ContentLayout';
import DepartmentListContainer from '../Containers/DepartmentListContainer';
import UserListContainer from '../Containers/UserListContainer';
import ImportReport from './ImportReport/ImportReport';

const AdminPage = ({ match }) => {
    return (
        <ContentLayout>
            <>
                <nav className='mb-2'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <NavLink to='/administrator/users' className='nav-link' activeClassName='active'>Користувачі</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/administrator/departments' className='nav-link' activeClassName='active'>Відділи</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/administrator/reports' className='nav-link' activeClassName='active'>Звіти</NavLink>
                        </li>
                    </ul>
                </nav>
            
                <Route path={`${match.path}/users`} exact render={() => <UserListContainer />} />
                <Route path={`${match.path}/departments`} render={() => <DepartmentListContainer />} />
                <Route path={`${match.path}/reports`} render={() => <ImportReport />} />
            </>    
        </ContentLayout>
    );
};

AdminPage.propTypes = {
    match: PropTypes.object
};

export default AdminPage;