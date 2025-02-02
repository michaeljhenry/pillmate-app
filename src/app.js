import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history}  from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import {startSetTimes} from './actions/times';
import {startSetDays} from './actions/days';



const store = configureStore();

  
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {  
        store.dispatch(login(user.uid));
        store.dispatch(startSetTimes()).then(() => {
            store.dispatch(startSetDays()).then(() => {
                renderApp();
                if(history.location.pathname==='/') {
                    history.push('/dashboard');
                }
            })
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
