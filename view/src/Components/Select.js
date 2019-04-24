import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ data, value, handleChange, id }) => {
    return (
        <select 
            className='form-control custom-select' 
            id={id}
            name={id} 
            value={value}
            onChange={handleChange}
        >
            <option value=''>Оберіть зі списку</option>
            { 
                data.map((item) => 
                    <option key={item._id} value={item._id}>
                        {item.name}
                    </option>
                )
            }
        </select>
    );
};

Select.propTypes = {
    data: PropTypes.array,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    id: PropTypes.string
};

export default Select;