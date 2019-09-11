/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
