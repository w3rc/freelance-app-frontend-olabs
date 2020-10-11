import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer/rootReducer';

const middleware: any = [thunk, logger];
const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null
		: compose;

const store: any = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;