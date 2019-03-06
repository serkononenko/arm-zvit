import React from 'react';

import './UserList.css'

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
            <li key={item._id}>
                {item.login}
            </li>
        )
        return (
            <ul className='UserList'>
                {list}
            </ul>
        )
    }
}