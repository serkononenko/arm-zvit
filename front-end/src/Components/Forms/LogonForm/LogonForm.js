import React from 'react';
import { Link } from 'react-router-dom';
import FormLayout from '../../../Layouts/FormLayout/FormLayout'

import '../Forms.css'

export default class LogonForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        const login = this.state.login;
        const password = this.state.password;
        fetch('/logOn', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
        event.preventDefault();
    }

    render() {
        return (
            <FormLayout>
                <form className='form'  onSubmit = { this.handleSubmit } >
                    <span className='form__title'>Вхід в систему</span>
                    <label>
                        Логін:
                        <input className = "form__input" type ='text' name ='login' onChange = { this.handleChange } minLength ='6' required />
                    </label>
                    <label>
                        Пароль:
                        <input className = "form__input" type ='password' name ='password' onChange = { this.handleChange } required />
                    </label>
                    <div className = 'form__btn'>
                        <input className = 'btn' type ='submit' value ='Вхід' />
                        <Link className = 'btn' to = '/registration' >Реєстрація</Link>
                    </div>
                </form>
            </FormLayout>
        )
    }
}