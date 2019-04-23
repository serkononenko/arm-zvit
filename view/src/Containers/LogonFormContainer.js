import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import LogonForm from '../Components/LogonForm';
import FormLayout from '../Layouts/FormLayout/FormLayout';

class LogonFormContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            login: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogIn(this.state);
    }

    render() {
        return (
            <FormLayout>
                <LogonForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    login={this.state.login}
                    password={this.state.password}
                />
            </FormLayout>
        );
    }
}

LogonFormContainer.propTypes = {
    handleLogIn: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogIn: ({ login, password }) => dispatch(loginUser({ login, password }))
    };
};

export default connect(null, mapDispatchToProps)(LogonFormContainer);