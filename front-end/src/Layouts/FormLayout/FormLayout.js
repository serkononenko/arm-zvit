import React from 'react';

import './FormLayout.css';

export default class FormLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='FormLayout'>
                {this.props.children}
            </div>
        )
    }
}