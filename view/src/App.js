import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogon, fetchDepartment } from './actions/actionCreators';

const Header = React.lazy(() => import('./Components/Header/Header'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));

import MainPage from './Components/MainPage/MainPage'

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDeparnmentList();
    }

    render() {
        const { loggedIn } = this.props;
        return (
            <React.Fragment>
                <Header />
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <MainPage handleLogOut={this.props.handleLogOut} />
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
                <Route path="/login" render={() => (
                    loggedIn ? (
                        <Redirect to="/"/>
                    ) : (
                        <LogonForm handleLogIn={this.props.handleLogIn} />
                    )
                )}/>
                <Route path="/registration" render={() => (
                    <RegistrationForm />
                )}/>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    const { loggedIn } = state.logon;
    return {
        loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogIn: () => dispatch(toggleLogon(true)),
        handleLogOut: () => dispatch(toggleLogon(false)),
        getDeparnmentList: () => dispatch(fetchDepartment())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
