// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducer/index';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './rootSaga';
// const sagaMiddleware = createSagaMiddleware();
// const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/CounterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
