import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function withDepartments(WrappedComponent) {
    const DepartmentContainer = (props) => {
        return <WrappedComponent data={props.departmentList} {...props} />;
    };

    DepartmentContainer.propTypes = {
        departmentList: PropTypes.array
    };

    const mapStateToProps = (state) => {
        const { departmentList } = state.department;
        return {
            departmentList
        };
    };
    
    return connect(mapStateToProps)(DepartmentContainer);
}

export default withDepartments;