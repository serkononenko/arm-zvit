import React from 'react';
import PropTypes from 'prop-types';
import withDepartments from '../Containers/withDepartments';
import LinkToDepartmentProfile from './LinkToDepartmentProfile';

const DepartmentList = ({data}) => {
    return (
        <div className='list-group'>
            {
                data.map((item) => <LinkToDepartmentProfile 
                    key={item._id}
                    department={item}
                    className='list-group-item list-group-item-action'
                />)
            }
        </div>
    );
};

DepartmentList.propTypes = {
    data: PropTypes.array
};

export default withDepartments(DepartmentList);