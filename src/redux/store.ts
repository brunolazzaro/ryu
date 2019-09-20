import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

// Import reducers and sagas
import reducers from 'redux/reducers';
import sagas from 'redux/sagas';

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const midddlewares = applyMiddleware(sagaMiddleware);

// Create Store
const store = createStore(reducers, composeWithDevTools(midddlewares));

// Run Sagas
sagaMiddleware.run(sagas);

export default store;
