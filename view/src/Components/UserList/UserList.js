import React from 'react';
import LinkToUserProfile from '../LinkToUserProfile/LinkToUserProfile';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: []
        };
    }

    componentDidMount() {
        fetch('/user/list')
            .then((res) => {
                res.json()
                    .then((data) => {
                        this.setState({
                            userlist: data
                        })
                    })
            })
    }

    render() {
        const { userlist } = this.state;
        const list = userlist.map((item) => 
            <LinkToUserProfile 
                key={item._id} 
                user={item.login} 
                className='list-group-item list-group-item-action'
            />
        )
        return (
            <div className='list-group'>
                {list}
            </div>
        )
    }
}