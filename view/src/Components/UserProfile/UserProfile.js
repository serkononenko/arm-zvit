import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import UserUpdateRole from '../UserUpdateRole/UserUpdateRole';
import UserUpdateLogin from '../UserUpdateLogin/UserUpdateLogin';
import UserUpdatePassword from '../UserUpdatePassword/UserUpdatePassword';
import './UserProfile.css';

const ContentLayout = React.lazy(() => import('../../Layouts/ContentLayout/ContentLayout'));
const UserUpdateImage = React.lazy(() => import('../UserUpdateImage/UserUpdateImage'));
const LoadIndicator = React.lazy(() => import('../LoadIndicator/LoadIndicator'));

const UserProfile = (props) => {
    const { profile, match, updateProfile } = props;
    if (!profile) {
        return <ContentLayout><LoadIndicator/></ContentLayout>;
    }
    return (
        <ContentLayout>
            <div className='card mb-3'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <UserUpdateImage image={profile.image} updateProfile={updateProfile} {...props}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>Особисті дані</h5>
                            <div className='list-group'>
                                <Link className='list-group-item list-group-item-action link-login-change' to={`${match.url}/login`}>{profile.login}</Link>
                                <Link className='list-group-item list-group-item-action link-department-change' to='#'>{profile.department}</Link>
                                <Link className='list-group-item list-group-item-action link-role-change' to={`${match.url}/role`}>{profile.isAdmin ? 'Адміністратор' : 'Користувач'}</Link>
                                <Link className='list-group-item list-group-item-action link-password-change' to={`${match.url}/password`}>******</Link>

                                <Route 
                                    path={`${match.url}/login`}
                                    render={(props) => <UserUpdateLogin 
                                        login={profile.login}
                                        updateProfile={updateProfile} 
                                        {...props}
                                    />}
                                />
                                <Route 
                                    path={`${match.url}/role`}
                                    render={(props) => <UserUpdateRole 
                                        role={profile.isAdmin}
                                        updateProfile={updateProfile} 
                                        {...props} 
                                    />}
                                />
                                <Route 
                                    path={`${match.url}/password`}
                                    render={(props) => <UserUpdatePassword 
                                        updateProfile={updateProfile}
                                        {...props} 
                                    />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
};

UserProfile.propTypes = {
    profile: PropTypes.object,
    match: PropTypes.object,
    updateProfile: PropTypes.func
};

export default UserProfile;