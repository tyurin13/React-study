import React from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './components/CounterPage';
import MainPage from './components/MainPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CounterPage />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
