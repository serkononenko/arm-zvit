import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout';

import './index.css';

const App = React.lazy(() => import('./App'));

const elem =  <Suspense fallback={<div>Loading...</div>}>
                <Router>
                  <App />
                </Router>
              </Suspense>;
 
ReactDOM.render(
    <Provider store={store}>
      <MainLayout children = { elem } />
    </Provider>,
    document.getElementById('root')
  );