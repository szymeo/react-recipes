import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './root';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

const middleware = applyMiddleware(...middlewares);

const store = createStore(
    rootReducer,
    middleware,
);

export default store;