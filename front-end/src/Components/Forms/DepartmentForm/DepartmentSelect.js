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
            .then((res) => {
                res.json().then((data) => {
                    this.setState({
                        departmentList: data
                    })
                })
            });
    }

    componentWillMount() {
        this.getDeparnmentList('/getDepartmentList');
    }

    render() {
        const departmentList = this.state.departmentList;
        console.log(typeof departmentList);
        return (
            <div className='DepartmentInput'>
                <select className='DepartmentInput__select'>

                </select>
            </div>
        )
    }
}