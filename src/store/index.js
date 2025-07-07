import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import todoReducer from './todo/todoSlice'
import swapiReducer from './swapi/swapiSlice'
import rootSaga from './todo/todoSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        todo: todoReducer,
        swapi: swapiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
