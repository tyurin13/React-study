import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './components/CounterPage/CounterContainer';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
