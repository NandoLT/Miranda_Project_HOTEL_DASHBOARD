import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom'; //Use HashRouter to can deploy in gh pages
import { Provider } from 'react-redux';
import store from './app/store';


import './assets/css/index.css';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  // <React.StrictMode>
    // <Router basename="/miranda_dashboard">
    <Router>
    {/* <Router> */}
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  // </React.StrictMode>

);