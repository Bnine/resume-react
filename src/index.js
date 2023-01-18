import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import './lang';

const baseURL = process.env.REACT_APP_API_URL;
const defaultBearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4MFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MjkzNjkwMSwibmJmIjoxNjcyOTM2OTAxLCJqdGkiOiJObmlxZlZEME9VZlBiWnkxIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kr72QjV0fe4b-LjwjTnjrRkmpvlpLIgn8wK2jXCr8aU";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common = {'Authorization': `bearer ${defaultBearerToken}`};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
