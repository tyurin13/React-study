import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import ToDoPage from './components/ToDoPage';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDoPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

