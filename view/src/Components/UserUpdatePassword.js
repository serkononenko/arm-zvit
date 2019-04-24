import React, { useState } from 'react';

const UserUpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = ({ match, updateProfile }) => {
        if (password === rePassword) {
            const { url } = match;
            updateProfile(url, JSON.stringify({oldPassword, password}));
        }
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='old-password'>Пароль</label>
                        <div className='col-sm-10'>
                            <input 
                                className='form-control'
                                id='old-password' 
                                type='password' 
                                value={oldPassword} 
                                onChange = { (e) => setOldPassword(e.target.value) } 
                                required 
                            />
                        </div>
                    </div>   
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='password'>Новий пароль</label>
                        <div className='col-sm-10'>
                            <input 
                                className = 'form-control'
                                id='password' 
                                type='password' 
                                value={password} 
                                onChange = { (e) => setPassword(e.target.value) } 
                                required 
                            />
                        </div>
                    </div>   
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='repassword'>Підтвердження паролю</label>
                        <div className='col-sm-10'>
                            <input 
                                className ='form-control'
                                id='repassword' 
                                type='password' 
                                value={rePassword} 
                                onChange ={ (e) => setRePassword(e.target.value) } 
                                required 
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-outline-success'>Змінити</button>
                </form>
            </div>
        </div>
    );
};

export default UserUpdatePassword;