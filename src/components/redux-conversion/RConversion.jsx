import React from 'react';
import { creatStore } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash/debounce';

let defaultState = 0; // does not have to be an object

function reducer(amount, state) {
    return state + 1;
}

let store = creatStore(reducer);