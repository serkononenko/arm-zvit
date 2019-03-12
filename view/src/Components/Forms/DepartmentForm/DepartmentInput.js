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
        const data = {
            department
        }
        fetch('/department/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                console.log(res.status);
            })
    }

    render() {
        return (
            <div className='DepartmentInput__container'>
                <form onSubmit={this.handleSubmit} className='DepartmentInput'>
                    <span className='DepartmentInput__title'>Додати новий відділ в БД</span>
                    <input className='' type='text' name='department' value={this.state.department} onChange={this.handleChange} required />
                    <input className='' type='submit' value='Додати' />
                </form>
            </div>
        )
    }
}

