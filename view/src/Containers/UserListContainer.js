import React from 'react';
import UserList from '../Components/UserList';

class UserListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userlist: []
        };
    }

    componentDidMount() {
        const headers = new Headers({
            'Authorization': 'Bearer '+localStorage.getItem('accessToken')
        });
        fetch('/api/user/list', {
            method: 'GET',
            headers
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        this.setState({
                            userlist: data
                        });
                    });
            });
    }

    render() {
        return <UserList userlist={this.state.userlist} />;
    }
}

export default UserListContainer;