import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDepartment } from './actions/departmentActions';
import { logoutUser } from './actions/logoutActions';
import routes from './routes';

const Header = React.lazy(() => import('./Components/Header/Header'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDeparnmentList('/department');
    }

    render() {
        const { loggedIn } = this.props;
        return (
            <React.Fragment>
                <Header handleLogOut={this.props.handleLogOut} user={loggedIn}/>
                {routes(loggedIn).map((item, i) => {
                    return (
                        <Route 
                            key={i} 
                            exact={item.isExact} 
                            path={item.path}
                            render={
                                props => (
                                    <item.component {...props} />
                                )
                            }
                        />
                    );
                })}
                <Footer />
            </React.Fragment>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.object,
    getDeparnmentList: PropTypes.func,
    handleLogOut: PropTypes.func
};

const mapStateToProps = (state) => {
    const { loggedIn } = state.logon;
    return {
        loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogOut: () => dispatch(logoutUser()),
        getDeparnmentList: (url) => dispatch(fetchDepartment(url))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
