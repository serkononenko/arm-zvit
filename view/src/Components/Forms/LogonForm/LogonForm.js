import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LogonForm = ({ handleSubmit, handleChange, login, password }) => {
    return (
        <form className='form-signin' onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Вхід в систему</h1>
            <div className="form-group">
                <label htmlFor='login'>Логін:</label>
                <input 
                    className ='form-control'
                    id='login' 
                    type ='text' name ='login' 
                    value={login} 
                    onChange={handleChange} 
                    minLength='4' 
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Пароль:</label>
                <input 
                    className='form-control'
                    id='password' 
                    type='password' name='password' 
                    value={password} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className='form-row justify-content-around'>
                <input className = 'btn btn-outline-success btn-lg col-5' type ='submit' value ='Вхід' />
                <Link className = 'btn btn-outline-success btn-lg col-5 overflow-hidden' to = '/registration' >Реєстрація</Link>
            </div>
        </form>
    );
};

LogonForm.propTypes = {
    login: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default LogonForm;