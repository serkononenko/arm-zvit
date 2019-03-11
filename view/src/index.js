import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { connect } from 'redux';
import store from './store';
import { toggleLogon, toggleLogout } from './actions/actionCreators';

import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from './Layouts/MainLayout/MainLayout';

import './index.css';

const App = React.lazy(() => import('./App'));

const mapStatetoProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
};

const mapDispatchToProps = {
  toggleLogon: toggleLogon,
  toggleLogout: toggleLogout
};

const elem =  <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                  <App />
                </Provider>
              </Suspense>;
 
ReactDOM.render(
    <Router>
      <MainLayout children = { elem } />
    </Router>,
    document.getElementById('root')
  );