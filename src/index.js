import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js/dist/popper.min'
import 'jquery/dist/jquery.min'
import '@fortawesome/fontawesome-free/css/all.css'

import {Provider} from 'react-redux'
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
