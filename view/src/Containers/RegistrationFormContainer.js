import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registrationUser } from '../actions/registrationActions';
import RegistrationForm from '../Components/Forms/RegistrationForm/RegistrationForm';

class RegistrationFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            repassword: '',
            department: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { login, password, repassword, department } = this.state;
        if (password === repassword) {
            this.props.registrationUser({ login, password, repassword, department });
        } else {
            alert('error');
        }
    }

    render() {
        const { login, password, repassword, department } = this.state;
        if (this.props.isRegistered) return <Redirect to="/"/>;
        return <RegistrationForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            login={login}
            password={password}
            repassword={repassword}
            department={department}
        />;
    }
}

RegistrationFormContainer.propTypes = {
    isRegistered: PropTypes.bool,
    registrationUser: PropTypes.func
};

const mapStateToProps = (state) => {
    const { isRegistered } = state.registration;
    return {
        isRegistered
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registrationUser: (creds) => dispatch(registrationUser(creds))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);