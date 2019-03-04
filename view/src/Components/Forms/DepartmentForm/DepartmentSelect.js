import React from 'react';

import './DepartmentSelect.css';

export default class DepartmentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: []
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

    componentDidMount() {
        this.getDeparnmentList('/getDepartmentList');
    }

    render() {
        const departmentList = this.state.departmentList;
        const selectItems = departmentList.map((item) => 
            <option key={item._id} value={item.department}>
                {item.department}
            </option>
        );
        return (
            <div className='DepartmentSelect'>
                <select className='DepartmentSelect__select' name='department' value={this.props.value} onChange={this.props.onChange}>
                    {selectItems}
                </select>
            </div>
        )
    }
}