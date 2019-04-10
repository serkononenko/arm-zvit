import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogout, fetchDepartment } from './actions/actionCreators';
import routes from './routes';

const Header = React.lazy(() => import('./Components/Header/Header'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'));

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
        handleLogOut: () => dispatch(toggleLogout()),
        getDeparnmentList: () => dispatch(fetchDepartment())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
