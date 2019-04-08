import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogout, fetchDepartment } from './actions/actionCreators';
import routes from './routes';

const Header = React.lazy(() => import('./Components/Header/Header'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));

const SimpleRoute = (route) => {
    return (
        <Route 
            path={route.path}
            render={
                props => (
                    <route.component {...props} />
                )
            }
        />
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDeparnmentList();
    }

    render() {
        const { loggedIn } = this.props;
        console.log(loggedIn);
        return (
            <React.Fragment>
                <Header handleLogOut={this.props.handleLogOut} user={loggedIn}/>
                {routes(loggedIn).map((item, i) => {
                    return (
                        <SimpleRoute key={i} exact={item.isExact} {...item} />
                    )
                })}
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
        handleLogOut: () => dispatch(toggleLogout()),
        getDeparnmentList: () => dispatch(fetchDepartment())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
