import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import DepartmentUpdateName from './DepartmentUpdateName';
const ContentLayout = React.lazy(() => import('../Layouts/ContentLayout/ContentLayout'));
const LoadIndicator = React.lazy(() => import('./LoadIndicator/LoadIndicator'));
import './DepartmentProfile.css';

const DepartmentProfile = ({ department, match, updateDepartment }) => {
    if (!department) return <ContentLayout><LoadIndicator/></ContentLayout>;
    return (
        <ContentLayout>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Дані відділу</h5>
                    <div className='list-group'>
                        <Link 
                            to={`${match.url}/name`} 
                            className='list-group-item list-group-item-action link-department-change-name'>
                            {department.name}
                        </Link>
                        
                        <Route 
                            path={`${match.url}/name`}
                            render={(props) => <DepartmentUpdateName 
                                name={department.name}
                                updateDepartment={updateDepartment} 
                                {...props}
                            />}
                        /> 
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
};

DepartmentProfile.propTypes = {
    department: PropTypes.object,
    match: PropTypes.object,
    updateDepartment: PropTypes.func
};

export default DepartmentProfile;