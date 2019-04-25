import React from 'react';
import PropTypes from 'prop-types';
import DepartmentList from '../Components/DepartmentList';
import DepartmentAdd from '../Components/DepartmentAdd';

class DepartmentListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            departmentName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            departmentName: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <>
                <DepartmentList />
                <DepartmentAdd handleChange={this.handleChange} value={this.state.departmentName} handleSubmit={this.handleSubmit}/>
            </>
        );
    }
}

export default DepartmentListContainer;