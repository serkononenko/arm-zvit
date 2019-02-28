import React from 'react';
import './DepartmentInput.css';

export default class DepartmentInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        e.preventDefault();
    }

    handleSubmit(e) {
        const department = this.state.department;
        fetch('/addDepartment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(department)
        })
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='department' value={this.state.department} onChange={this.handleChange} required />
                <input type='submit' value='Додати' />
            </form>
        )
    }
}

