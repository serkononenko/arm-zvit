import React from 'react';
import { DepartmentContext } from '../../../Context';

import './DepartmentSelect.css';

export default class DepartmentInput extends React.Component {
    render() {
        const departmentList = this.context;
        const selectItems = departmentList.map((item) => 
            <option key={item._id} value={item.department}>
                {item.department}
            </option>
        );
        return (
            <div className='DepartmentSelect'>
                <select className='DepartmentSelect__select' name='department' value={this.props.value} onChange={this.props.onChange}>
                    { selectItems }
                </select>
            </div>
        )
    }
}

DepartmentInput.contextType = DepartmentContext;