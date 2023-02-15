/*
Author: David Luby
Date created: 2-10-2023

This script serves a frontend for a contract evaluation web application
facilitated by a Flask API
*/


// Module imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Children imports
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';


// Index render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
