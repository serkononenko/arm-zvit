import React from 'react';
import { Link } from 'react-router-dom';
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

export default class LogonFormContainer extends React.Component {
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
                res.json().then((data) => {
                    that.props.handleLogIn(data.login);
                })
            } else {
                alert('Невірний логін або пароль');
            }
        })
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
        )
    }
}