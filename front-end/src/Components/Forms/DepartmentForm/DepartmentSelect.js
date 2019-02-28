import React from 'react';

import './DepartmentSelect.css';

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
            .then((res) => this.setState({departmentList: res.status}));
    }

    componentDidMount() {
        this.getDeparnmentList('/getDepartmentList');
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