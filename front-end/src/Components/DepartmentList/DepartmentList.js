import React from 'react';
import './DepartmentList.css';

export default class DepartmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: []
        };
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

    componentDidMount() {
        this.getDeparnmentList('/getDepartmentList');
    }

    render() {
        const departmentList = this.state.departmentList.map((item) => <li>{item.department}</li>)
        return (
            <ul className='DepartmentList'>
                {departmentList}
            </ul>
        )
    }
}