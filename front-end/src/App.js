import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));
import './App.css';

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={ LogonForm } />
                    <Route exact path="/registration" component={ RegistrationForm } />
                </Switch>
            </Router>
        </React.Fragment>
    )
};
