import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3003/';
axios.defaults.baseURL = 'https://pidogsserver-production.up.railway.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
