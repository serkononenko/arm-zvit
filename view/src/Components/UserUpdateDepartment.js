import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DepartmentSlect from './DepartmentSelect';

const UserUpdateDepartment = ({ match, updateProfile }) => {
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { url } = match;
        if (!department) alert('Оберіть підрозділ');
        else updateProfile(url, JSON.stringify({ department }));
    };

    const handleChange = (e) => {
        setDepartment(e.target.value);
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='department'>Оберіть підрозділ</label>
                        <div className='col-sm-10'>
                            <DepartmentSlect value={department} handleChange={handleChange} id='department'/>
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

UserUpdateDepartment.propTypes = {
    match: PropTypes.object,
    updateProfile: PropTypes.func
};

export default UserUpdateDepartment;