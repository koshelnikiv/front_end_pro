import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todoReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
