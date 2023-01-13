import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './utils/rootReducer';

export default function configureStore(initialState = {}) {
    let composeEnhancers = compose;
    const reduxSagaMonitorOptions = {};

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

    store.runSaga = sagaMiddleware.run;

    store.injectedReducers = {};
    store.injectedSagas = {};
    store.asyncReducers = {};

    return store;
}
