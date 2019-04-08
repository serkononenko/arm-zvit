import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserUpdateRole from '../UserUpdateRole/UserUpdateRole';
import './UserProfile.css';
import { connect } from 'react-redux';
import { fetchProfile, clearUserProfile } from '../../actions/actionCreators';

const ContentLayout = React.lazy(() => import('../../Layouts/ContentLayout/ContentLayout'));
const UploadImage = React.lazy(() => import('../UploadImage/UploadImage'));
const LoadIndicator = React.lazy(() => import('../LoadIndicator/LoadIndicator'));

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { url } = this.props.match;
            this.props.getUserProfile(url);
    }

    componentWillUnmount() {
        this.props.clearUserProfile();
    }

    render() {
        const { profile, match } = this.props;
        if (!profile.login) {
            return <LoadIndicator />
        }
        return (
            <ContentLayout>
                <div className='card mb-3'>
                    <div className='row no-gutters'>
                        <div className='col-md-4'>
                            <UploadImage match={match}/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>Особисті дані</h5>
                                <div className='list-group'>
                                    <Link className='list-group-item list-group-item-action link-login-change' to='#'>{profile.login}</Link>
                                    <Link className='list-group-item list-group-item-action link-department-change' to='#'>{profile.department}</Link>
                                    <Link className='list-group-item list-group-item-action link-role-change' to={`${match.url}/role`}>{profile.isAdmin ? 'Адміністратор' : 'Користувач'}</Link>
                                    <Link className='list-group-item list-group-item-action link-password-change' to='#'>******</Link>

                                    <Route 
                                        path={`${match.url}/role`}
                                        render={() => <UserUpdateRole role={profile.isAdmin}/>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        )
    }
};

const mapStateToProps = (state) => {
    const { profile } = state.profile;
    return {
        profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (url) => dispatch(fetchProfile(url)),
        clearUserProfile: () => dispatch(clearUserProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);