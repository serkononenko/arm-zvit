import React from 'react';
import { Link } from 'react-router-dom';
import FormLayout from '../../../Layouts/FormLayout/FormLayout'

import '../Forms.css'

export default class LogonForm extends React.Component {
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
                that.props.handleLogIn();
            } else {
                alert('Невірний логін або пароль');
            }
        })
    }

    render() {
        return (
            <FormLayout>
                <form className='form'  onSubmit = { this.handleSubmit } >
                    <span className='form__title'>Вхід в систему</span>
                    <label>
                        Логін:
                        <input className = "form__input" type ='text' name ='login' value={this.state.login} onChange = { this.handleChange } minLength ='6' required />
                    </label>
                    <label>
                        Пароль:
                        <input className = "form__input" type ='password' name ='password' value={this.state.password} onChange = { this.handleChange } required />
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