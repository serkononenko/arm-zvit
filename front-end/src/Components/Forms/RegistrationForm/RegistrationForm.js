import React from 'react';
import FormLayout from '../../../Layouts/FormLayout/FormLayout';
import DepartmentSelect from '../DepartmentForm/DepartmentSelect';

import '../Forms.css';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            repassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const login = this.state.login;
        const password = this. state.password;
        const repassword = this.state.repassword;
        const department = this.state.department;
        if (password === repassword) {
            const data = {
                login: login.toLowerCase(),
                password,
                department
            };
            fetch('/registration', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function(res) {
                switch (res.status) {
                    case 200:
                        alert('Регистрация пользователя выполнена!');
                        break;
                    case 403:
                        alert('Имя пользователя занято');
                    default:
                        break;
                }
            });
        } else alert("Error");
        event.preventDefault();
    }

    render() {
        return (
            <FormLayout>
                <form className='form'  onSubmit = { this.handleSubmit } >
                    <span className='form__title'>Реєстрація в системі</span>
                    <label>
                        Логін:
                        <input className = "form__input" type='text' name='login' value={this.state.login} onChange = { this.handleChange } minLength='6' required />
                    </label>
                    <label>
                        Пароль:
                        <input className = "form__input" type='password' name='password' value={this.state.password} onChange = { this.handleChange } required />
                    </label>
                    <label>
                        Підтвердження паролю:
                        <input className = "form__input" type='password' name='repassword' value={this.state.repassword} onChange = { this.handleChange } required />
                    </label>
                    <DepartmentSelect onChange={this.handleChange} value={this.state.department} />
                    <div className = 'form__btn'>
                        <input className = 'btn' type='submit' value='Зареєструватися' />
                    </div>
                </form>
            </FormLayout>
        )
    }
}