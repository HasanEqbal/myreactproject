import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './components/App';

const storeInstance = Store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
