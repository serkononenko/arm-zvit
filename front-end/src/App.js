import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));

import ContentLayout from './Layouts/ContentLayout/ContentLayout';

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };

        this.logIn = this.logIn.bind(this);
    }

    logIn() {
        this.setState({
            loggedIn: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route exact path="/" render={ () => (this.state.loggedIn ? (<ContentLayout/>) : (<Redirect to="/login"/>))}/>
                        <Route exact path="/login" render={ () =>  <LogonForm logIn={ this.logIn } />  } />
                        <Route exact path="/registration" render={ (props) => <RegistrationForm {...props} /> } />
                    </Switch>
            </React.Fragment>
        )
    }
};
