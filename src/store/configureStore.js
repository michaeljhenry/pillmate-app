import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import timesReducer from '../reducers/times';
import daysReducer from '../reducers/days';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            times: timesReducer,
            days: daysReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


