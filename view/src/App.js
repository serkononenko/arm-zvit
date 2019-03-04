import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));

import MainPage from './Components/MainPage/MainPage'

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
//            loggedIn: !!localStorage.getItem('loggedIn')
            loggedIn: false
        };

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn() {
        this.setState({
            loggedIn: true
        });
        localStorage.setItem('loggedIn', 'true');
    }

    handleLogOut() {
        this.setState({
            loggedIn: false
        });
        localStorage.removeItem('loggedIn');
    }

    render() {
        const elem = this.state.loggedIn ? (<MainPage/>) : (<Redirect to="/login"/>);
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" render={ () => elem}/>
                    <Route exact path="/login" render={() => <LogonForm handleLogIn={this.handleLogIn} />} />
                    <Route exact path="/registration" render={ (props) => <RegistrationForm {...props} /> } />
                </Switch>
            </React.Fragment>
        )
    }
};