import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from 'react-router-dom';
 /* Simulation-1 42D -HashRouter */
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
