import React from 'react';
import './UserProfile.css';
import { connect } from 'react-redux';
import { fetchProfile, clearUserProfile } from '../../actions/actionCreators';

const ContentLayout = React.lazy(() => import('../../Layouts/ContentLayout/ContentLayout'));
const UploadImage = React.lazy(() => import('../UploadImage/UploadImage'));
const LoadIndicator = React.lazy(() => import('../LoadIndicator/LoadIndicator'));

class UserProfile extends React.Component {
    componentDidMount() {
        if(location.search) {
            const url = location.pathname+location.search;
            this.props.getUserProfile(url);
        }
    }

    componentWillUnmount() {
        this.props.clearUserProfile();
    }

    render() {
        const { profile } = this.props;
        if (!profile.login) {
            return <LoadIndicator />
        }
        return (
            <ContentLayout>
                <div className='card mb-3'>
                    <div className='row no-gutters'>
                        <div className='col-md-4'>
                            <UploadImage />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>{profile.login}</h5>
                                {profile.department.name}
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