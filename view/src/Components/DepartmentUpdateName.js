import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DepartmentUpdateName = ({ name, updateDepartment, match }) => {
    const [newName, setNewName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { url } = match;
        updateDepartment(url, JSON.stringify({name: newName}));
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label htmlFor='name' className='col-sm-2 col-form-label'>Нова назва</label>
                        <div className='col-sm-10'>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder={name} 
                                id='name'
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                required
                                minLength='6'
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-10'>
                            <button type='submit' className='btn btn-outline-success'>Змінити</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

DepartmentUpdateName.propTypes = {
    name: PropTypes.string,
    updateDepartment: PropTypes.func,
    match: PropTypes.object
};

export default DepartmentUpdateName;