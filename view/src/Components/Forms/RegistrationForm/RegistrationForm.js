import React from 'react';
import { Redirect } from 'react-router-dom';
import FormLayout from '../../../Layouts/FormLayout/FormLayout';
import DepartmentSelect from '../DepartmentForm/DepartmentSelect';

import '../Forms.css';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            repassword: '',
            isRegistered: false 
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
        const that = this;
        const { login, password, repassword, department } = this.state;
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
                    that.setState({
                        isRegistered: true
                    });
                    break;
                case 403:
                    alert('Имя пользователя занято');
                default:
                    break;
                }
            });
        } else alert('Error');
        event.preventDefault();
    }

    render() {
        const { isRegistered } = this.state;
        if (!isRegistered) {
            return (
                <FormLayout>
                    <form className='form'  onSubmit = { this.handleSubmit } >
                        <span className='form__title'>Реєстрація в системі</span>
                        <div className='form-group'>
                            <label htmlFor='login'>Логін:</label>
                            <input 
                                className = 'form-control'
                                id='login' 
                                type='text' 
                                name='login' 
                                value={this.state.login} 
                                onChange = { this.handleChange } 
                                minLength='6' 
                                required 
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Пароль:</label>
                            <input 
                                className = 'form-control'
                                id='password' 
                                type='password' 
                                name='password' 
                                value={this.state.password} 
                                onChange = { this.handleChange } 
                                required 
                            />
                        </div>   
                        <div className='form-group'>
                            <label htmlFor='repassword'>Підтвердження паролю:</label>
                            <input 
                                className ='form-control'
                                id='repassword' 
                                type='password' 
                                name='repassword' 
                                value={this.state.repassword} 
                                onChange ={this.handleChange} 
                                required 
                            />
                        </div>
                        <DepartmentSelect onChange={this.handleChange} value={this.state.department} />
                        <div className ='form__btn'>
                            <input className ='btn btn-outline-success btn-lg form__btn-item' type='submit' value='Зареєструватися' />
                        </div>
                    </form>
                </FormLayout>
            );
        }
        return <Redirect to="/"/>;
    }
}