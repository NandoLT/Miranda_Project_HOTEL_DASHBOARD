import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import storage from './utils/storage';

import './assets/css/index.css';

const accessGranted = storage.get('auth');

// ReactDOM.createRoot(
//   <React.StrictMode>
//     <Router>
//       <App isLogged={ !!accessGranted } />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
        <App isLogged={ !!accessGranted } />
    </Router>
  </React.StrictMode>
);