import React from 'react';
import './UserProfile.css';

const ContentLayout = React.lazy(() => import('../../Layouts/ContentLayout/ContentLayout'));

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const url = location.pathname+location.search;
        fetch(url);
    }

    render() {
        return (
            <ContentLayout>
                <h1>Hello {this.props.user}</h1>
            </ContentLayout>
        )
    }
};

export default UserProfile;