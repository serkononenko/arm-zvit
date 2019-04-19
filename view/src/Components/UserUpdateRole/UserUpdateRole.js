import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserUpdateRole = ({ role, updateProfile, match }) => {

    const [isAdmin, toogleIsAdmin] = useState(role);

    const handleOptionChange = (e) => {
        const { value } = e.target;
        toogleIsAdmin(!!value);
    };

    const handleSubmit = (e) => {
        const { url } = match;
        e.preventDefault();
        updateProfile(url, JSON.stringify({ isAdmin }));
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='form-group'>
                        <div className='row'>
                            <legend className='col-form-label col-sm-2 pt-0'>Роль користувача</legend>
                            <div className='col-sm-10'>
                                <div className='custom-control custom-radio'>
                                    <input 
                                        className='custom-control-input' 
                                        name='radio' 
                                        id='radio1' 
                                        value='' 
                                        checked={isAdmin===false}
                                        onChange={handleOptionChange} 
                                        type='radio' 
                                    />
                                    <label className='custom-control-label' htmlFor='radio1'>Користувач</label>
                                </div>
                                <div className='custom-control custom-radio'>
                                    <input 
                                        className='custom-control-input' 
                                        name='radio' 
                                        id='radio2' 
                                        value={true} 
                                        checked={isAdmin===true}
                                        onChange={handleOptionChange} 
                                        type='radio' 
                                    />
                                    <label className='custom-control-label' htmlFor='radio2'>Адміністратор</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
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

UserUpdateRole.propTypes = {
    role: PropTypes.bool,
    updateProfile: PropTypes.func,
    match: PropTypes.object
};

export default UserUpdateRole;