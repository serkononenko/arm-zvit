import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DepartmentSelect = ({ department, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor='department'>Виберіть свій підрозділ</label>
            <select 
                className='form-control custom-select'
                id='department' 
                name='department' 
                value={value} 
                onChange={onChange}
            >
                { 
                    department.map((item) => 
                        <option key={item._id} value={item._id}>
                            {item.name}
                        </option>
                    )
                }
            </select>
        </div>
    );
};

DepartmentSelect.propTypes = {
    department: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
};

const mapStateToProps = (state) => {
    const { department } = state.department;
    return {
        department
    };
};

export default connect(mapStateToProps)(DepartmentSelect);