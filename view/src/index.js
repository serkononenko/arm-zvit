import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";

import MainLayout from './Layouts/MainLayout/MainLayout';

import './index.css';

const App = React.lazy(() => import('./App'));
const elem =  <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>;      
const history = createBrowserHistory()       
 
ReactDOM.render(
    <Router history={history}>
      <MainLayout children = { elem } />
    </Router>,
    document.getElementById('root')
  );