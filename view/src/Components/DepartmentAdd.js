import React from 'react';
import PropTypes from 'prop-types';

const DepartmentAdd = ({ handleChange, handleSubmit, departmentName }) => {
    return (
        <div className='card mt-3'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label htmlFor='department' className='col-sm-2 col-form-label'>Новий відділ</label>
                        <div className='col-sm-10'>
                            <input 
                                className='form-control' 
                                type='text' 
                                id='department' 
                                value={departmentName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-sm-10'>
                            <button type='submit' className='btn btn-outline-success'>Додати</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

DepartmentAdd.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    departmentName: PropTypes.string
};

export default DepartmentAdd;

