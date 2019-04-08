import React from 'react';
import { connect } from 'react-redux';
import { toggleLogon } from '../../../actions/actionCreators';
import { Link, Redirect } from 'react-router-dom';
import FormLayout from '../../../Layouts/FormLayout/FormLayout';

import '../Forms.css';

const LogonForm = (props) => {
    return (
        <form className='form'  onSubmit = { props.handleSubmit } >
            <span className='form__title'>Вхід в систему</span>
            <div className="form-group">
                <label htmlFor='login'>Логін:</label>
                <input 
                    className ="form-control"
                    id='login' 
                    type ='text' name ='login' 
                    value={props.login} 
                    onChange = { props.handleChange } 
                    minLength ='4' 
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Пароль:</label>
                <input 
                    className = "form-control"
                    id='password' 
                    type ='password' name ='password' 
                    value={props.password} 
                    onChange = { props.handleChange } 
                    required 
                />
            </div>
            <div className = 'form__btn'>
                <input className = 'btn btn-outline-success btn-lg form__btn-item' type ='submit' value ='Вхід' />
                <Link className = 'btn btn-outline-success btn-lg form__btn-item' to = '/registration' >Реєстрація</Link>
            </div>
        </form>
    )
}

class LogonFormContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            login: '',
            password: '',
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const that = this;
        const {login, password} = this.state;
        fetch('/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login.toLowerCase(),
                password
            })
        }).then(function(res) {
            if (res.status == 200) {
                res.text().then((token) => {
                    that.props.handleLogIn(token);
                });
                that.setState({
                    redirectToReferrer: true
                });
            } else {
                alert('Невірний логін або пароль');
            }
        })
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
    
        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <FormLayout>
                <LogonForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    login={this.state.login}
                    password={this.state.password}
                />
            </FormLayout>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogIn: (token) => dispatch(toggleLogon(token))
    }
}

export default connect(null, mapDispatchToProps)(LogonFormContainer);