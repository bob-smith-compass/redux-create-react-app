
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
    if(action.type === 'CHANGE_CURRENCY'){
        return Object.assign({}, state, {currency: action.data})
    }
    if(action.type === 'CHANGE_ORIGINAL_AMMOUTN'){
        console.log(`adtion`, action.type);
        return defaultState = state = Object.assign({}, state, {originalAmout: action.data}) ;
        // return state;
    }
    if(action.type == 'INCREASE'){
        console.log(`adtion`, action.type);
        return Object.assign({}, state, {amount: state.amount + 1})
        // return {...state, {amount: state.amount + 1}} // NOT SUPPORTED OUR OF THE BOX WITH create-react-app
    }
    return state;
}

let store = createStore(reducer);

export default store;