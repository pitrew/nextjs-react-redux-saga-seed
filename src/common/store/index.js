import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

/**
 * Configure store using initial state
 * @param {Object} initialState Initial state
 * @return {Store<any>} Configured store
 */
function configureStore(initialState) {
    const windowExist = typeof window === 'object';
    const sagaMiddleware = createSagaMiddleware();
    const loggerMiddleware = createLogger({
        colors: {
            title: windowExist,
            prevState: windowExist,
            action: windowExist,
            nextState: windowExist,
            error: windowExist
        }
    });
    const composeEnhancers = (windowExist &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line no-underscore-dangle
        compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(loggerMiddleware),
            applyMiddleware(sagaMiddleware)
        )
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    // run the rootSaga initially
    store.runSagaTask();
    return store;
}

export default configureStore;
