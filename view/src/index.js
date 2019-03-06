import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from './Layouts/MainLayout/MainLayout';

import './index.css';

const App = React.lazy(() => import('./App'));
const elem =  <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>;    
 
ReactDOM.render(
    <Router>
      <MainLayout children = { elem } />
    </Router>,
    document.getElementById('root')
  );