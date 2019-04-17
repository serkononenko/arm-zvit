import React from 'react';
import PropTypes from 'prop-types';
import { connect  } from 'react-redux';
import { fetchProfile, clearProfile, updateProfile } from '../actions/profileActions';
import UserProfile from '../Components/UserProfile/UserProfile';

class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { url } = this.props.match;
        this.props.getUserProfile(url);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isUpdated !== prevProps.isUpdated) {
            const { url } = this.props.match;
            this.props.getUserProfile(url);
            this.props.history.push(url);
        }
    }

    componentWillUnmount() {
        this.props.clearUserProfile();
    }

    render() {
        return <UserProfile 
            profile={this.props.profile} 
            match={this.props.match}
            updateProfile={this.props.updateProfile}
        />;
    }
}

UserProfileContainer.propTypes = {
    match: PropTypes.object,
    profile: PropTypes.object,
    history: PropTypes.object,
    isUpdated: PropTypes.bool,
    getUserProfile: PropTypes.func,
    clearUserProfile: PropTypes.func,
    updateProfile: PropTypes.func
};

const mapStateToProps = (state) => {
    const { profile, isUpdated } = state.profile;
    return {
        profile,
        isUpdated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (url) => dispatch(fetchProfile(url)),
        clearUserProfile: () => dispatch(clearProfile()),
        updateProfile: (url, data) => dispatch(updateProfile(url, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);