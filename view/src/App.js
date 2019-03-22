import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogon, toggleLogout, fetchDepartment } from './actions/actionCreators';

const Header = React.lazy(() => import('./Components/Header/Header'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));
const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));
const UserProfile = React.lazy(() => import('./Components/UserProfile/UserProfile'));
const MainPage = React.lazy(() => import('./Components/MainPage/MainPage'));

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
                <Header handleLogOut={this.props.handleLogOut} />
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <MainPage />
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
                <Route path="/profile" render={() => (
                    loggedIn ? (
                        <UserProfile user={ loggedIn } />
                    ) : (
                        <Redirect to="/"/>
                    )
                )}/>
                <Footer />
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
        handleLogIn: (data) => dispatch(toggleLogon(data)),
        handleLogOut: () => dispatch(toggleLogout()),
        getDeparnmentList: () => dispatch(fetchDepartment())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
