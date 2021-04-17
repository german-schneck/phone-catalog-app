/*eslint-disable*/
// Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Roots
import rootSagas from './rootSagas';
import rootReducers from './rootReducers';

const composeEnhancers =
	typeof window === 'object' && process.env.NODE_ENV === 'development' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  rootReducers,
  enhancer
);

// then run the saga
sagaMiddleware.run(rootSagas);

export default store;
