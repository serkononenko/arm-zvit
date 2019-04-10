import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import LoadIndicator from './Components/LoadIndicator/LoadIndicator';

import './index.css';
import '../../node_modules/jquery/dist/jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = React.lazy(() => import('./App'));

const elem =  <Suspense fallback={<LoadIndicator />}>
    <Router>
        <App />
    </Router>
</Suspense>;
 
ReactDOM.render(
    <Provider store={store}>
        <MainLayout>
            {elem}
        </MainLayout>
    </Provider>,
    document.getElementById('root')
);