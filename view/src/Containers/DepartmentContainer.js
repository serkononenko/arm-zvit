import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function withDepartments(WrappedComponent) {
    const DepartmentContainer = (props) => {
        return <WrappedComponent data={props.department} {...props} />;
    };

    DepartmentContainer.propTypes = {
        department: PropTypes.array
    };

    const mapStateToProps = (state) => {
        const { department } = state.department;
        return {
            department
        };
    };
    
    return connect(mapStateToProps)(DepartmentContainer);
}

export default withDepartments;