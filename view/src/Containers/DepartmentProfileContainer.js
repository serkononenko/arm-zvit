import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DepartmentProfile from '../Components/DepartmentProfile';
import { fetchDepartment, updateDepartment } from '../actions/departmentActions';

class DepartmentProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { url } = this.props.match;
        this.props.getDepartment(url);
    }

    render() {
        return <DepartmentProfile 
            match={this.props.match}
            department={this.props.department}
            updateDepartment={this.props.updateDepartment}
        />;
    }
}

DepartmentProfileContainer.propTypes = {
    match: PropTypes.object,
    department: PropTypes.object,
    getDepartment: PropTypes.func,
    updateDepartment: PropTypes.func
};

const mapStateToProps = (state) => {
    const { department } = state.department;
    return {
        department
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDepartment: (url) => dispatch(fetchDepartment(url)),
        updateDepartment: (url, data) => dispatch(updateDepartment(url, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentProfileContainer);