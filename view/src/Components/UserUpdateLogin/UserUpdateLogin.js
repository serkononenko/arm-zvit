import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserUpdateLogin = ({login, match, updateProfile}) => {
    const [newLogin, setNewLogin] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setNewLogin(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { url } = match;
        updateProfile(url, JSON.stringify({login: newLogin}));
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Логін користувача</h5>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='login'>Новий логін</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='login'  
                            placeholder={login}
                            value={newLogin}
                            onChange={handleChange}
                            required
                            minLength='6'    
                        />
                    </div>
                    <button type='submit' className='btn btn-outline-success'>Змінити</button>
                </form>
            </div>
        </div>
    );
};

UserUpdateLogin.propTypes = {
    login: PropTypes.string,
    match: PropTypes.object,
    updateProfile: PropTypes.func
};

export default UserUpdateLogin;