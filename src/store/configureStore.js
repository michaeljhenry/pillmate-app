import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import timesReducer from '../reducers/times';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            times: timesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


