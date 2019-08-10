import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * REDUX
 */

import { createStore } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash/debounce';

let defaultState = 0; // does not have to be an object

function reducer(state = defaultState, action) {
    if(action.type == 'INCREASE'){
        return state + 1;
    }
    return state;
}

let store = createStore(reducer);


/**
 * Read from the store
 * subscribe
 */
store.subscribe(function() {
  console.log('state', store.getState());
})

/**
 * update state/store
 * dispatch
 */
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE'});




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
