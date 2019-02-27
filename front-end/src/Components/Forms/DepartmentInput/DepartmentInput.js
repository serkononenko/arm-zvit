import React from 'react';

import './DepartmentInput.css';

export default class DepartmentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: ''
        };

        this.getDeparnmentList = this.getDeparnmentList.bind(this);
    }

    getDeparnmentList(url) {
        fetch(url, {method: 'GET'})
            .then((result) => this.setState({departmentList: result}));
    }

    componentDidMount() {
        this.getDeparnmentList('getDepartmentList')
    }

    render() {
        return (
            <div className='DepartmentInput'>
                <select className='DepartmentInput__select'>
                    <option value="grapefruit">Grapefruit</option>
                </select>
            </div>
        )
    }
}