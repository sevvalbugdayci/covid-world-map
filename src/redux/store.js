import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dataReducer from '../reducers/dataReducer';
import dataSaga from '../sagas/dataSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    data:dataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(dataSaga);

export default store;