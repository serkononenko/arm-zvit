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
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='login'>Новий логін</label>
                        <div className='col-sm-10'>
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

UserUpdateLogin.propTypes = {
    login: PropTypes.string,
    match: PropTypes.object,
    updateProfile: PropTypes.func
};

export default UserUpdateLogin;