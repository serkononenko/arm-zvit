import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import LoadIndicator from './Components/LoadIndicator/LoadIndicator';

import './index.css';

const App = React.lazy(() => import('./App'));


 
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<LoadIndicator />}>
            <Router>
                <App />
            </Router>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);