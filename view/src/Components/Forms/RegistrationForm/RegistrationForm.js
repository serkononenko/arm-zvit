import React from 'react';
import PropTypes from 'prop-types';
import FormLayout from '../../../Layouts/FormLayout/FormLayout';
import DepartmentSelect from '../DepartmentForm/DepartmentSelect';

import '../Forms.css';

const RegistrationForm = ({ handleChange, handleSubmit, login, password, repassword, department }) => {
    return (
        <FormLayout>
            <form className='form'  onSubmit={handleSubmit} >
                <span className='form__title'>Реєстрація в системі</span>
                <div className='form-group'>
                    <label htmlFor='login'>Логін:</label>
                    <input 
                        className = 'form-control'
                        id='login' 
                        type='text' 
                        name='login' 
                        value={login} 
                        onChange = {handleChange} 
                        minLength='6' 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Пароль:</label>
                    <input 
                        className = 'form-control'
                        id='password' 
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>   
                <div className='form-group'>
                    <label htmlFor='repassword'>Підтвердження паролю:</label>
                    <input 
                        className ='form-control'
                        id='repassword' 
                        type='password' 
                        name='repassword' 
                        value={repassword} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <DepartmentSelect onChange={handleChange} value={department} />
                <div className ='form__btn'>
                    <input className ='btn btn-outline-success btn-lg form__btn-item' type='submit' value='Зареєструватися' />
                </div>
            </form>
        </FormLayout>
    );
};

RegistrationForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    login: PropTypes.string,
    password: PropTypes.string,
    repassword: PropTypes.string,
    department: PropTypes.string
};

export default RegistrationForm;