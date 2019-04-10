import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const MainPage = ({loggedIn}) => {
    if (loggedIn.isAdmin) return <Redirect to='/administrator' />;
    return (
        <h1>Hello world</h1>
    );
};

MainPage.propTypes = {
    loggedIn: PropTypes.object
};

const mapStateToProps = (state) => {
    const { loggedIn } = state.logon;
    return {
        loggedIn
    };
};

export default connect(mapStateToProps)(MainPage);