import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));

import ContentLayout from './Layouts/ContentLayout/ContentLayout';
import DepartmentForm from './Components/Forms/DepartmentForm/DepartmentInput';

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: !!localStorage.getItem('loggedIn')
        };

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn() {
        this.setState({
            loggedIn: true
        });
        localStorage.setItem('loggedIn');
    }

    handleLogOut() {
        this.setState({
            loggedIn: false
        });
        localStorage.removeItem('loggedIn');
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route exact path="/" render={ () => (this.state.loggedIn ? (<DepartmentForm/>) : (<Redirect to="/login"/>))}/>
                        <Route exact path="/login" render={() => <LogonForm handleLogIn={this.handleLogIn} />} />
                        <Route exact path="/registration" render={ (props) => <RegistrationForm {...props} /> } />
                    </Switch>
            </React.Fragment>
        )
    }
};
