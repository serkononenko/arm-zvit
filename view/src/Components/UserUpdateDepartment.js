import React from 'react';

const UserUpdateDepartment = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'></label>
                        <div className='col-sm-10'>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserUpdateDepartment;