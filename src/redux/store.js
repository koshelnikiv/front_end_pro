import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { swapiReducer } from './reducers';

export const store = createStore(swapiReducer, applyMiddleware(thunk));
