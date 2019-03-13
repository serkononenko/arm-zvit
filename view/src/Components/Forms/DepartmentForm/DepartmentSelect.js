import React from 'react';
import { connect } from 'react-redux';

class DepartmentInput extends React.Component {
    render() {
        const departmentList = this.props.department;
        const selectItems = departmentList.map((item) => 
            <option key={item._id} value={item._id}>
                {item.department}
            </option>
        );
        return (
            <div class="form-group">
                <label htmlFor='department'>Виберіть свій підрозділ</label>
                <select 
                    className='form-control'
                    id='department' 
                    name='department' 
                    value={this.props.value} 
                    onChange={this.props.onChange}>
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