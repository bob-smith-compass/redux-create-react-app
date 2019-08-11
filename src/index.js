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

// let defaultState = 0; // does not have to be an object
let defaultState = {
    originalAmout: 0,
    amount: 0
}

function reducer(state = defaultState, action) {
    if(action.type === 'CHANGE_ORIGINAL_AMMOUTN'){
        console.log(`adtion`, action.type);
        return defaultState = state = Object.assign({}, state, {originalAmout: action.data}) ;
        // return state;
    }
    if(action.type == 'INCREASE'){
        console.log(`adtion`, action.type);
        // return Object.assign({}, state, {amount: state.amount + 1})
        return {...state, {amount: state.amount + 1}} // NOT SUPPORTED OUR OF THE BOX WITH create-react-app
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
store.dispatch({type: 'CHANGE_ORIGINAL_AMMOUTN', data: 100});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: ''});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
