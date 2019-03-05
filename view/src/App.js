import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import { DepartmentContext } from './Context'

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));

import MainPage from './Components/MainPage/MainPage'

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: !!localStorage.getItem('loggedIn'),
            departmentList: []
        };

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.getDeparnmentList = this.getDeparnmentList.bind(this);
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

    getDeparnmentList(url) {
        fetch(url, {method: 'GET'})
            .then((res) => {
                res.json().then((data) => {
                    this.setState({
                        departmentList: data
                    })
                })
            });
    }

    componentDidMount() {
        this.getDeparnmentList('/department/list');
    }

    render() {
        const elem = this.state.loggedIn ? (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <MainPage handleLogOut={this.handleLogOut}/>
                    )}
                />
                <Redirect to="/" />
            </Switch>
        ) : (
            <Switch>
                <Route
                    exact
                    path="/login"
                    render={() => <LogonForm handleLogIn={this.handleLogIn} />}
                />
                <Route
                    exact
                    path="/registration"
                    render={() => <RegistrationForm />}
                />
                <Redirect to="/login" />
            </Switch>
        );
        return (
            <DepartmentContext.Provider value={this.state.departmentList}>
                <Header />
                {elem}
            </DepartmentContext.Provider>
        )

    }

};
