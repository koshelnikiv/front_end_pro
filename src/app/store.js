import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { browserHistory } from './history';

import destinationsReducer from '../features/destinations/destinationsSlice';
import hotelsReducer from '../features/hotels/hotelsSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({ history: browserHistory });

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destinations: destinationsReducer,
    hotels: hotelsReducer,
  },
  middleware: (getDefault) => getDefault().concat(routerMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
