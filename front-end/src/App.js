import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = React.lazy(() => import('./Components/Header/Header'));
const FormLayout = React.lazy(() => import('./Layouts/FormLayout/FormLayout'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));
import './App.css';

const LogonFormLayouted =  <FormLayout children = { <LogonForm /> } />;
const RegistrationFormLayouted = <FormLayout children = { <RegistrationForm /> } />;

export default function App() {
    return (
        <div>
            <Header />
            { LogonFormLayouted }
        </div>
    )
};