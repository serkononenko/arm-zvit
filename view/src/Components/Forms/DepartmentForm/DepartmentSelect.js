import React from 'react';

import './DepartmentSelect.css';
import { connect } from 'react-redux';

class DepartmentInput extends React.Component {
    render() {
        const departmentList = this.props.department;
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

const mapStateToProps = (state) => {
    const { department } = state.department;
    return {
        department
    }
};

export default connect(mapStateToProps)(DepartmentInput);