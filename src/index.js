import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import CounterContainer from './components/CounterPage/CounterContainer';
import MainPage from './components/MainPage';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/counter' component={CounterContainer} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
