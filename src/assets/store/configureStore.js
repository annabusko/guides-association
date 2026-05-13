import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

export default () => {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const { default: logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}